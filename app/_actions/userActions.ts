"use server"

import { prisma } from "@/prisma/prisma";
import { auth, signIn } from "../_lib/auth/auth";
import { revalidatePath } from "next/cache";

export async function signInAction() {
    await signIn('github', {
        redirectTo: '/',
    });
}

export async function getUserDetails() {
    const session = await auth();

    if (!session) throw new Error("Not authenticated");

    const user = await prisma.user.findUnique({
        where: { id: session.user!.id },
        select: { name: true, displayName: true, bio: true, theme: true, lastActive: true, streakStart: true },
    });

    if (!user) throw new Error("User not found");

    return user;
}

export async function updateUserLastActive(userId: string) {

    if (!userId) throw new Error("User ID is required");

    await prisma.user.update({
        where: { id: userId },
        data: { lastActive: new Date() },
    });
}

export async function updateUserStreak(userId: string) {

    if (!userId) throw new Error("User ID is required");

    await updateUserLastActive(userId);

    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { streakStart: true, lastActive: true },
    });

    if(!user) throw new Error("User not found");

    if(user?.streakStart == null)  {
        await prisma.user.update({
            where: { id: userId },
            data: { streakStart: new Date() },
        });
    }


    const daysBetween = Math.floor(
        (new Date().getTime() - user.streakStart!.getTime()) / (1000 * 60 * 60 * 24)
    );

    if(daysBetween > 1) {
        await prisma.user.update({
            where: { id: userId },
            data: { streakStart: new Date() },
        });
    }
}

export async function getDisplayName() {
    const session = await auth();

    if (!session) throw new Error("Not authenticated");
    // Fetch the user's display name 
    const user = await prisma.user.findUnique({
        where: { id: session.user!.id },
        select: { name: true, displayName: true },
    });

    if(!user) return "Unknown User";

    if(user.displayName == null) {
        user.displayName = user.name;
    }

    return  user.displayName;
}   

export async function updateUserDetails(formData: any) {
    const session = await auth();

    if (!session) throw new Error("Not authenticated");

    console.log("Updating user details", formData);
    
    await prisma.user.update({
        where: { id: session.user!.id },
        data: { displayName: formData.get("name"), bio: formData.get("bio")},
    });

    // Revalidate the path to reflect changes
    revalidatePath(`/`);
}

export async function updateUserTheme(formData: any) {
    const session = await auth();

    if (!session) throw new Error("Not authenticated");

    console.log("Updating user theme", formData);

    await prisma.user.update({
        where: { id: session.user!.id },
        data: { theme: formData.get("theme") },
    });

    // Revalidate the path to reflect changes
    revalidatePath(`/`);
}   