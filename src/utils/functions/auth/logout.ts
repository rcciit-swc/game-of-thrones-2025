import { supabase } from "../supabase-client";

export const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        throw new Error("Logout failed");
    }
}