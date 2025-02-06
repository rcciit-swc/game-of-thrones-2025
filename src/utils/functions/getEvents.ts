import { supabase } from "./supabase-client";
import { events } from "@/lib/types/events"

export async function getEvents(): Promise<{ data: events[] | null; count: number | null }> {
    const { data, error, count } = await supabase
        .from('events')
        .select('*', { count: 'exact' });

    if (error) throw error;

    return { data, count };
}
