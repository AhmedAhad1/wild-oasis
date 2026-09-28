import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mtvbcgrnpgmqyyevtysq.supabase.co";
const supabaseKey = "sb_publishable_mqfHvHCOCymG9yGKhhS9dg_wKY5b5IA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
