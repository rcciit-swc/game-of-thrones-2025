import { supabase } from "./supabase-client";
import { events } from "@/lib/types/events"

export async function addEvent(event: Omit<events, 'id' | 'reg_status'>) {
    // const eventCategoryId = process.env.EVENT_CATEGORY_ID
    // for some reas when getting the event_category_id from the env it is not working
    console.log("Adding event", event);

    const { data, error } = await supabase
        .from('events')
        .insert([
            {
                event_category_id: '46ea4f76-36ba-469d-aed6-3bf72d1beb87',
                ...event,
                registration_fees: parseInt(event.price),
                prize_pool: parseInt(event.prize),
                reg_status: true,
            },
        ]);
    if (error) throw error;
    return data;
}
