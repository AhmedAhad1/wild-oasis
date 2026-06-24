import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vjwlsjujcvjwsdixzinq.supabase.co";
const supabaseKey = `sb_publishable_0Nk389x2dg44RJy1bV86mQ_ed0f7iyk`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
