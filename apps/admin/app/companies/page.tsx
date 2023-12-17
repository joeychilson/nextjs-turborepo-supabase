import { createClient } from "@repo/supabase/server";
import { cookies } from "next/headers";

export default async function Companies() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: companies } = await supabase.from("companies").select();

  return <pre>{JSON.stringify(companies, null, 2)}</pre>;
}
