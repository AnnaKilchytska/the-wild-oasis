import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://boecwsahgxafbpnaxjpi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvZWN3c2FoZ3hhZmJwbmF4anBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MTE2NjksImV4cCI6MjAyODA4NzY2OX0.pFfcff451rFnC60f8zO7B28vDsHuniDzROuFd_d_E34";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
