import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useSupabase } from '../data/hooks/useSupabase';

const projectUrl = 'https://ekcxuqkjdgwknnrvcdzk.supabase.co';

const anonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrY3h1cWtqZGd3a25ucnZjZHprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxNTkwMDYsImV4cCI6MjAwODczNTAwNn0.6GxJRCC6DN2_yV3OWKYiLAhB03PTiqowiRaFN_nS05I';

const supabase = createClient(projectUrl, anonKey);

const getAuth = async () => {
  try {
    const auth = await supabase.auth.getSession();
    console.log(auth, 'auth');
  } catch (error) {
    console.log(error);
  }
};

// interface Country {
//  // id: number;
//   name: string;
// }

const SupabasePage = () => {
  useEffect(() => {
    getAuth();
  }, []);
  // const [countries, setCountries] = useState<Country[] | null>(null);

  //  useEffect(() => {
  //   getCountries();
  // }, []);

  // const getCountries = async ():

  //     async function getCountries() {
  //   const { data } = await supabase.from("countries").select();
  //   setCountries(data);
  // }

  const { data, isLoading } = useSupabase();

  if (isLoading) {
    return <div>this page is loading</div>;
  }

  return (
    <div>
      {data && (
        <ul>
          {data.map((country) => (
            <li key={country.name}>{country.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SupabasePage;
