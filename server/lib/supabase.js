const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Public client — uses publishable key, respects RLS (READ only)
const supabasePublic = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_PUBLISHABLE
);

// Admin client — uses secret key, bypasses RLS (full access)
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET
);

module.exports = { supabasePublic, supabaseAdmin };
