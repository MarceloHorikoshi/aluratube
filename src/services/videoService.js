import { createClient } from "@supabase/supabase-js"

const PROJECT_URL = "https://zxmwlxsvniiodmyzwlrb.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4bXdseHN2bmlpb2RteXp3bHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTEzMzIsImV4cCI6MTk4Mzk2NzMzMn0.2uyglrZjqGAqwo--uOjiLn8rJY8A4epUJ2iyVrfVzqQ";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}

export function profileService() {
    return {
        getAllProfiles() {
            return supabase.from("profiles")
                    .select("*");
        }
    }
}