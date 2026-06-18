const express = require('express');
const router = express.Router();
const { supabasePublic } = require('../lib/supabase');

// GET /api/content — returns all portfolio data for the public page
router.get('/', async (req, res) => {
  try {
    const [
      profile, stats, experience, projects, certifications, skills, contactSettings,
    ] = await Promise.all([
      supabasePublic.from('profile').select('*').single(),
      supabasePublic.from('stats').select('*').order('sort_order'),
      supabasePublic.from('experience').select('*').eq('is_visible', true).order('sort_order'),
      supabasePublic.from('projects').select('*').eq('is_visible', true).order('sort_order'),
      supabasePublic.from('certifications').select('*').eq('is_visible', true).order('sort_order'),
      supabasePublic.from('skills').select('*').eq('is_visible', true).order('sort_order'),
      supabasePublic.from('contact_settings').select('*').single(),
    ]);

    const errors = [profile, stats, experience, projects, certifications, skills, contactSettings]
      .filter(r => r.error).map(r => r.error.message);
    if (errors.length > 0) return res.status(500).json({ error: errors.join(', ') });

    res.json({
      profile: profile.data, stats: stats.data, experience: experience.data,
      projects: projects.data, certifications: certifications.data,
      skills: skills.data, contact: contactSettings.data,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch content' });
  }
});

// GET /api/content/cv — CV-only data
router.get('/cv', async (req, res) => {
  try {
    const [profile, stats, experience, projects, certifications, skills] = await Promise.all([
      supabasePublic.from('profile').select('*').single(),
      supabasePublic.from('stats').select('*').order('sort_order'),
      supabasePublic.from('experience').select('*').eq('is_visible', true).order('sort_order'),
      supabasePublic.from('projects').select('*').eq('is_visible', true).eq('include_in_cv', true).order('sort_order'),
      supabasePublic.from('certifications').select('*').eq('is_visible', true).order('sort_order'),
      supabasePublic.from('skills').select('*').eq('is_visible', true).order('sort_order'),
    ]);
    res.json({
      profile: profile.data, stats: stats.data, experience: experience.data,
      projects: projects.data, certifications: certifications.data, skills: skills.data,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch CV data' });
  }
});

module.exports = router;
