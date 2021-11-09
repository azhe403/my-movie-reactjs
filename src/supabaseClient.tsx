import {createClient, RealtimeClient} from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

// @ts-ignore
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// @ts-ignore
export const supabaseRealtime = new RealtimeClient(supabaseUrl, supabaseAnonKey);
