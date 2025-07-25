"use server";

import { prisma } from "@/prisma/prisma";
import { auth } from "../_lib/auth/auth";
import { revalidatePath } from "next/cache";

export const getUserNotes = async () => {
  const session = await auth();
  const notes = await prisma.note.findMany({
    where: {
      userId: session?.user?.id,
    },
  });
  return notes;
}

export const createUserNote = async (formData: FormData) => {
  const session = await auth();

   await prisma.note.create({
    data: {
      title: formData.get("title")?.toString() || "Untitled",
      content: formData.get("content")?.toString() || "",
      skillId: formData.get("skill") as string,
      createdAt: new Date(),
      lastUpdated: new Date(),
      userId: session!.user!.id!
    }
  })

 
  revalidatePath("/")
}

export const deleteUserNote = async (id: string, formData: FormData) => {
  const session = await auth();
  await prisma.note.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/")

}