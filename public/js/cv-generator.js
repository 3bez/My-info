// ============================================================
// ATLAS PORTFOLIO — cv-generator.js
// Generates an ATS-compliant PDF from live /api/content/cv
// ============================================================

async function downloadCV() {
  const btn = document.getElementById('cv-download-btn');
  if (btn) { btn.textContent = 'Generating...'; btn.disabled = true; }
  try {
    const res = await fetch('/api/content/cv');
    const data = await res.json();
    generatePDF(data);
  } catch (err) {
    console.error('CV generation error:', err);
    alert('Failed to generate CV. Please try again.');
  } finally {
    if (btn) { btn.textContent = 'Download CV'; btn.disabled = false; }
  }
}

function generatePDF(data) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const p = data.profile || {};
  const pageW = 210, margin = 20, contentW = pageW - margin * 2;
  let y = 20;

  function checkPage(needed = 10) { if (y + needed > 275) { doc.addPage(); y = 20; } }
  function sectionTitle(text) {
    checkPage(12); doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(0,0,0);
    doc.text(text.toUpperCase(), margin, y); y += 1;
    doc.setDrawColor(178,58,46); doc.setLineWidth(0.5); doc.line(margin, y, margin+contentW, y); y += 6;
  }
  function bodyText(text, indent = 0) {
    doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(60,65,74);
    const lines = doc.splitTextToSize(text, contentW - indent);
    checkPage(lines.length * 5); doc.text(lines, margin+indent, y); y += lines.length * 5 + 1;
  }
  function labelText(text) { doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(0,0,0); doc.text(text, margin, y); }
  function rightText(text) { doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(130,135,143); doc.text(text, pageW-margin, y, { align:'right' }); }

  doc.setFont('helvetica','bold'); doc.setFontSize(22); doc.setTextColor(22,24,29);
  doc.text(`${p.first_name||''} ${p.last_name||''}`, margin, y); y += 8;
  doc.setFont('helvetica','normal'); doc.setFontSize(12); doc.setTextColor(178,58,46);
  doc.text(p.title||'', margin, y); y += 6;
  doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(100,100,100);
  const contactParts = [p.location, p.email, p.linkedin, p.github].filter(Boolean);
  doc.text(contactParts.join('  |  '), margin, y); y += 3;
  doc.setDrawColor(219,213,199); doc.setLineWidth(0.3); doc.line(margin, y, margin+contentW, y); y += 8;

  sectionTitle('Professional Summary');
  if (Array.isArray(p.bio) && p.bio.length > 0) { bodyText(p.bio[0]); y += 2; }

  if (data.experience && data.experience.length > 0) {
    sectionTitle('Experience');
    data.experience.forEach(exp => {
      checkPage(20); labelText(`${exp.role}  —  ${exp.company}`); rightText(exp.period); y += 4;
      doc.setFont('helvetica','italic'); doc.setFontSize(9); doc.setTextColor(130,135,143);
      doc.text(exp.location||'', margin, y); y += 5;
      bodyText(exp.description||'', 0);
      if (exp.tags && exp.tags.length > 0) {
        doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(178,58,46);
        doc.text(exp.tags.join('  ·  '), margin, y); y += 5;
      }
      y += 3;
    });
  }

  if (data.projects && data.projects.length > 0) {
    sectionTitle('Selected Projects');
    data.projects.forEach(proj => {
      checkPage(15); labelText(`${proj.title} (${proj.type})`); y += 5;
      bodyText(proj.description||'', 0);
      if (proj.tags && proj.tags.length > 0) {
        doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(178,58,46);
        doc.text(proj.tags.join('  ·  '), margin, y); y += 5;
      }
      y += 2;
    });
  }

  if (data.skills && data.skills.length > 0) {
    sectionTitle('Skills');
    const skillGroups = {};
    data.skills.forEach(s => { if (!skillGroups[s.skill_group]) skillGroups[s.skill_group] = []; skillGroups[s.skill_group].push(s.name); });
    Object.entries(skillGroups).forEach(([group, items]) => {
      checkPage(8); doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(0,0,0);
      doc.text(`${group}: `, margin, y, { baseline:'top' });
      const labelW = doc.getTextWidth(`${group}: `);
      doc.setFont('helvetica','normal'); doc.setTextColor(60,65,74);
      const skillLines = doc.splitTextToSize(items.join(', '), contentW - labelW);
      doc.text(skillLines, margin+labelW, y); y += skillLines.length * 5 + 2;
    });
    y += 2;
  }

  if (data.certifications && data.certifications.length > 0) {
    sectionTitle('Certifications');
    data.certifications.forEach(cert => {
      checkPage(7); labelText(`${cert.name}`); rightText(cert.year); y += 4;
      doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(130,135,143);
      doc.text(cert.issuer, margin, y); y += 6;
    });
  }

  const filename = `${p.first_name||'CV'}_${p.last_name||''}_CV.pdf`.replace(/\s+/g, '_');
  doc.save(filename);
}

window.downloadCV = downloadCV;
