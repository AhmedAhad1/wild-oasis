import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase
    .from("cabins")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    throw new Error(error);
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error(error);
  }
}
