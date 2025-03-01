import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ravgrxssqkuevcyvbjel.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdmdyeHNzcWt1ZXZjeXZiamVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4NTQ1NjIsImV4cCI6MjA1NjQzMDU2Mn0.K9rXfq85Z9u_PYyaoHd8ca80y3LJEWiOLao1ubK23wM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);