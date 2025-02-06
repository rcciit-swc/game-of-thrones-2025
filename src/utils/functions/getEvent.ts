import { supabase } from "./supabase-client";

export async function getEventByName(name: string): Promise<Event | null> {
    const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('name', name)
        .single();

    if (error) throw error;
    return data;
}