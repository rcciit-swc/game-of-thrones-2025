import { supabase } from "../supabase-client";

export const login = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: location.origin + "/auth/callback?next=",
        },
    });
    if (error) {
        console.log("some error ocurred ")
        console.error("Login Error:", error);
        return null;
    }
    console.log("data is ", data)
    return data;
};
