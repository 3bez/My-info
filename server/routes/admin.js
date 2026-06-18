const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { supabaseAdmin } = require('../lib/supabase');
require('dotenv').config();

const JWT_SECRET = process.env.SUPABASE_SECRET + process.env.ADMIN_PASSWORD;

function requireAuth(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try { jwt.verify(token, JWT_SECRET); next(); }
  catch { res.status(401).json({ error: 'Invalid or expired token' }); }
}

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ admin: true }, JWT_SECRET, { expiresIn: '12h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

router.use(requireAuth);

// PROFILE
router.get('/profile', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('profile').select('*').single();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});
router.put('/profile', async (req, res) => {
  const { id, ...updates } = req.body;
  updates.updated_at = new Date().toISOString();
  const { data, error } = await supabaseAdmin.from('profile').update(updates).eq('id', id).select().single();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// STATS
router.get('/stats', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('stats').select('*').order('sort_order');
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.post('/stats', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('stats').insert(req.body).select().single();
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.put('/stats/:id', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('stats').update(req.body).eq('id', req.params.id).select().single();
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.delete('/stats/:id', async (req, res) => {
  const { error } = await supabaseAdmin.from('stats').delete().eq('id', req.params.id);
  if (error) return res.status(500).json({ error: error.message }); res.json({ success: true });
});

// EXPERIENCE
router.get('/experience', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('experience').select('*').order('sort_order');
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.post('/experience', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('experience').insert(req.body).select().single();
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.put('/experience/:id', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('experience').update(req.body).eq('id', req.params.id).select().single();
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.delete('/experience/:id', async (req, res) => {
  const { error } = await supabaseAdmin.from('experience').delete().eq('id', req.params.id);
  if (error) return res.status(500).json({ error: error.message }); res.json({ success: true });
});

// PROJECTS
router.get('/projects', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('projects').select('*').order('sort_order');
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.post('/projects', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('projects').insert(req.body).select().single();
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.put('/projects/:id', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('projects').update(req.body).eq('id', req.params.id).select().single();
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.delete('/projects/:id', async (req, res) => {
  const { error } = await supabaseAdmin.from('projects').delete().eq('id', req.params.id);
  if (error) return res.status(500).json({ error: error.message }); res.json({ success: true });
});

// CERTIFICATIONS
router.get('/certifications', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('certifications').select('*').order('sort_order');
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.post('/certifications', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('certifications').insert(req.body).select().single();
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.put('/certifications/:id', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('certifications').update(req.body).eq('id', req.params.id).select().single();
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.delete('/certifications/:id', async (req, res) => {
  const { error } = await supabaseAdmin.from('certifications').delete().eq('id', req.params.id);
  if (error) return res.status(500).json({ error: error.message }); res.json({ success: true });
});

// SKILLS
router.get('/skills', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('skills').select('*').order('sort_order');
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.post('/skills', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('skills').insert(req.body).select().single();
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.put('/skills/:id', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('skills').update(req.body).eq('id', req.params.id).select().single();
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.delete('/skills/:id', async (req, res) => {
  const { error } = await supabaseAdmin.from('skills').delete().eq('id', req.params.id);
  if (error) return res.status(500).json({ error: error.message }); res.json({ success: true });
});

// CONTACT SETTINGS
router.get('/contact-settings', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('contact_settings').select('*').single();
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.put('/contact-settings', async (req, res) => {
  const { id, ...updates } = req.body;
  updates.updated_at = new Date().toISOString();
  const { data, error } = await supabaseAdmin.from('contact_settings').update(updates).eq('id', id).select().single();
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});

// MESSAGES
router.get('/messages', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('messages').select('*').order('sent_at', { ascending: false });
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.put('/messages/:id/read', async (req, res) => {
  const { data, error } = await supabaseAdmin.from('messages').update({ is_read: true }).eq('id', req.params.id).select().single();
  if (error) return res.status(500).json({ error: error.message }); res.json(data);
});
router.delete('/messages/:id', async (req, res) => {
  const { error } = await supabaseAdmin.from('messages').delete().eq('id', req.params.id);
  if (error) return res.status(500).json({ error: error.message }); res.json({ success: true });
});

module.exports = router;
