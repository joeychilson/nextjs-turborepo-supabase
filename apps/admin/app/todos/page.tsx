import { createClient } from "@repo/supabase/server";
import { cookies } from "next/headers";

export default async function Todos() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: todos } = await supabase.from("todos").select();

  return <pre>{JSON.stringify(todos, null, 2)}</pre>;
}
