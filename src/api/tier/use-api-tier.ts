import { useGlobalStore } from "@store/global";

import { createBrowserClient } from "@supabase/ssr";
import { useEffect } from "react";

export const useApiTier = () => {
  const supabaseClient = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { profile, setTier } = useGlobalStore((state) => ({
    profile: state.profile,
    setTier: state.setTier,
  }));

  useEffect(() => {
    const fetchTier = async () => {
      if (!profile) return;

      let { data, error, status } = await supabaseClient
        .from("tiers")
        .select(`*`)
        .eq("user_id", profile.id)
        .single();

      if (error && status !== 406) return;

      setTier(data?.value || 1);
    };
    fetchTier();
  }, [profile]);
};
