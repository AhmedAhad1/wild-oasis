import supabase from "./supabase";

export async function getBookings() {
  let { data, error } = await supabase.from("bookings").select("*");

  if (error) {
    throw new Error(error);
  }

  return data;
}
