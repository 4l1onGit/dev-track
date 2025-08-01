"use server"

import { signIn } from "../_lib/auth/auth";

export async function signInAction() {
    await signIn('github', {
        redirectTo: '/',
    });
}
