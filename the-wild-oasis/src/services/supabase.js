import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gkastoxykvdqxkgpaygr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrYXN0b3h5a3ZkcXhrZ3BheWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MjU5NTYsImV4cCI6MjA2NTIwMTk1Nn0.9kyM7qzC-hKnLICkwVNJaY7qDQHSH_zGNVh2bzsj4vU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
