import { createClient } from "@supabase/supabase-js";

const projectUrl = "https://ekcxuqkjdgwknnrvcdzk.supabase.co"

const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrY3h1cWtqZGd3a25ucnZjZHprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxNTkwMDYsImV4cCI6MjAwODczNTAwNn0.6GxJRCC6DN2_yV3OWKYiLAhB03PTiqowiRaFN_nS05I"

const supabase = createClient(projectUrl, anonKey);

export const getCountry = async ()=>{
 try {
  const {data} = await supabase.from('countries').select()
  return data
 } catch (error) {
  
 }
}