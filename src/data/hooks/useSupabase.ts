import { useQuery } from "react-query"
import { getCountry } from "../api/supabase"

export const useSupabase = ()=>{
 return useQuery(['countries'],()=>{
  return getCountry()
 })
}