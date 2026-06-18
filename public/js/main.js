// ============================================================
// ATLAS PORTFOLIO — main.js
// Fetches content from /api/content and renders using Atlas DS
// ============================================================

const API = '/api/content';

async function loadPortfolio() {
  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error('Failed to load content');
    const data = await res.json();
    window.PORTFOLIO = transformData(data);
    renderPortfolio();
  } catch (err) {
    console.error('Portfolio load error:', err);
    document.getElementById('root').innerHTML = `
      <div class="portfolio-loading">Failed to load — please refresh</div>
    `;
  }
}

function transformData(data) {
  const p = data.profile || {};
  const skillGroups = {};
  (data.skills || []).forEach(s => {
    if (!skillGroups[s.skill_group]) skillGroups[s.skill_group] = [];
    skillGroups[s.skill_group].push(s.name);
  });
  const skills = Object.entries(skillGroups).map(([group, items]) => ({ group, items }));

  return {
    identity: {
      first: p.first_name || '',
      last: p.last_name || '',
      title: p.title || '',
      location: p.location || '',
      tagline: p.tagline || '',
      email: p.email || '',
      available: p.available_text || '',
      linkedin: p.linkedin || '',
      github: p.github || '',
    },
    stats: (data.stats || []).map(s => ({ value: s.value, suffix: s.suffix, label: s.label })),
    about: {
      headline: p.available_text || '',
      paragraphs: Array.isArray(p.bio) ? p.bio : [p.bio || ''],
      skills,
    },
    experience: (data.experience || []).map(e => ({
      current: e.is_current, period: e.period, role: e.role,
      company: e.company, location: e.location, description: e.description,
      tags: Array.isArray(e.tags) ? e.tags : [],
    })),
    projects: (data.projects || []).map(proj => ({
      type: proj.type, icon: proj.icon, title: proj.title,
      desc: proj.description, tags: Array.isArray(proj.tags) ? proj.tags : [],
      link: proj.link || '',
    })),
    certifications: (data.certifications || []).map(c => ({
      icon: c.icon, name: c.name, issuer: c.issuer, year: c.year,
    })),
    contact: { headline: data.contact?.headline || '', line: data.contact?.line || '' },
    social: [
      { icon: 'linkedin', label: 'LinkedIn', href: p.linkedin || '#' },
      { icon: 'github', label: 'GitHub', href: p.github || '#' },
      { icon: 'mail', label: 'Email', href: `mailto:${p.email}` },
    ],
  };
}

function renderPortfolio() {
  document.getElementById('root').innerHTML = '';
  const App = window.PortfolioApp;
  if (App) {
    ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
  }
}

document.addEventListener('DOMContentLoaded', loadPortfolio);
