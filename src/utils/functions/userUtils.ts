import { supabase } from "./supabase-client";



const getUserData = async () => {
  try {
    const { data } = await supabase.auth.getSession()
    console.log("data is session ", data)
    const userdetails = await supabase
      .from('users')
      .select("*").eq('id', data?.session?.user?.id);
    console.log("userdetails is ", userdetails)
    if (userdetails && userdetails.data && userdetails.data.length > 0) {
      return userdetails.data[0];
    }
  } catch (err) {
    console.log(err);
  }
};

export { getUserData };

