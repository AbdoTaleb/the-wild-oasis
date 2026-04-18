import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iasucqxivczapcrukzli.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlhc3VjcXhpdmN6YXBjcnVremxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0NDE4OTcsImV4cCI6MjA4OTAxNzg5N30.wV2omVUgjCi1pA4VXG4mtepOEqIsPlOQTvjPiO_abUU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
