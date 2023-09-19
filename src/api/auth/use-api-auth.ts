import { showNotification } from "@mantine/notifications";
// import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from "next/navigation";
import { useState } from "react";
// import useFetch from "../use-fetch";
// import useAuthCtx from "src/store/auth/use-auth-ctx";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export interface AuthDTO {
  email: string;
  password: string;
}

const handleErrorNotification = (msg: string) => {
  showNotification({
    title: "Authentication error!",
    message: msg,
    color: "red",
  });
};

const handleSuccessNotification = (title: string, msg: string) => {
  showNotification({
    title: title,
    message: msg,
    color: "green",
  });
};

export const useApiAuth = () => {
  // const { redirectTo } = useAuthCtx();

  // const { fetchData } = useFetch();
  const supabaseClient = createClientComponentClient();
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);

  // ----------------------------------------------------------------------------
  // SignUp - Email & Password
  // ----------------------------------------------------------------------------

  const auth_signUp = async (dto: AuthDTO) => {
    const { email, password } = dto;
    setLoading(true);

    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
      // options: {
      //   emailRedirectTo: redirectTo,
      // },
    });

    setLoading(false);

    if (error) return handleErrorNotification(error.message);

    router.push("/");
  };

  // ----------------------------------------------------------------------------
  // SignOut
  // ----------------------------------------------------------------------------

  const auth_signOut = async () => {
    setLoading(true);

    await supabaseClient.auth.signOut();

    setLoading(false);
  };

  // ----------------------------------------------------------------------------
  // Reset Password
  // ----------------------------------------------------------------------------

  const auth_forgotPassword = async (email: string) => {
    setLoading(true);

    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: process.env.NEXT_PUBLIC_HOST + "/auth/reset",
    });

    setLoading(false);

    if (error) return handleErrorNotification(error.message);

    handleSuccessNotification(
      "Email sent successfully!",
      "Click on the link we sent you to reset your password"
    );
  };

  const auth_resetPassword = async (password: string) => {
    setLoading(true);

    const { error } = await supabaseClient.auth.updateUser({
      password: password,
    });

    setLoading(false);

    if (error) return handleErrorNotification(error.message);

    handleSuccessNotification("Password reset successfully!", "");
  };

  // ----------------------------------------------------------------------------
  // SignIn - Email & Password
  // ----------------------------------------------------------------------------

  const auth_signInWithPassword = async (dto: AuthDTO) => {
    const { email, password } = dto;
    setLoading(true);

    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) return handleErrorNotification(error.message);

    // if (!redirectTo) return router.push("/user");

    // window.location.replace(`${redirectTo}/api/auth/callback`);
  };

  // ----------------------------------------------------------------------------
  // SignIn - Magic link
  // ----------------------------------------------------------------------------

  // const auth_signInWithOtp = async (email: string) => {
  //   setLoading(true);

  //   const { error } = await supabaseClient.auth.signInWithOtp({
  //     email,
  //     options: {
  //       emailRedirectTo: process.env.NEXT_PUBLIC_HOST,
  //     },
  //   });

  //   // closeAllModals();
  //   setLoading(false);

  //   if (error) return handleErrorNotification(error.message);

  // handleSuccessNotification(
  //   'Email sent successfully!',
  //   'Click on the link we sent you to reset your password'
  // );
  // };

  // ----------------------------------------------------------------------------
  // SignIn Provider - GitHub | GitLab
  // ----------------------------------------------------------------------------

  const auth_signInWithProvider = async (provider: "github" | "gitlab") => {
    supabaseClient.auth.signInWithOAuth({
      provider,
      // options: {
      //   redirectTo: redirectTo
      //     ? `${redirectTo}/api/auth/callback`
      //     : `${process.env.NEXT_PUBLIC_HOST}/user`,
      // },
    });
  };

  // ----------------------------------------------------------------------------
  // Delete Account
  // ----------------------------------------------------------------------------

  const auth_deleteAccount = async () => {
    // setLoading(true);
    // const res = await fetchData("/api/user/delete", {
    //   method: "DELETE",
    //   headers: {
    //     Accept: "application/json",
    //   },
    // });
    // if (!res.success) return handleErrorNotification(res.message);
    // handleSuccessNotification("Account deleted!", res.message);
    // setLoading(false);
    // router.push("/user/deleted");
  };

  return {
    isLoading,
    auth_signUp,
    auth_signOut,
    auth_signInWithPassword,
    // auth_signInWithOtp,
    auth_signInWithProvider,
    auth_resetPassword,
    auth_forgotPassword,
    auth_deleteAccount,
  };
};
