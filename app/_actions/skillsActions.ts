"use server";
import { prisma } from "@/prisma/prisma";
import { Category, Confidence, SkillLevel } from "@prisma/client";
import { auth } from "../_lib/auth/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export const getUserSkills = async (page = 0, records = 5) => {
    const session = await auth();

      if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }


    const skills = await prisma.skill.findMany({
  where: {
    userId: session?.user?.id,
  },
  skip: page * records,
  take: records,
  orderBy: { 
    createdAt: 'desc'
  }
});

  const total = await prisma.skill.count({
  where: { userId: session?.user?.id },
});



    return {skills, total } ;
}

export const getUserSkill = async (id: string) => {
   const session = await auth();
   const skill = await prisma.skill.findFirst({
    where: {
      id: id,
      userId: session!.user!.id,
    }
   })
   return skill;
}

export const addUserSkill = async (formData : any) => {

    const session = await auth();
    console.log(formData);
    if(session) {
         const newSkill = await prisma.skill.create({
        data: {
       name: formData.get("name")?.toString() || "New skill",
    userId: session?.user?.id ?? "",
    category: formData.get("category")?.toString() || Category.Other,
    confidence: formData.get("confidence")?.toString() || Confidence.Low,
    progress: Number(formData.get("progress")) || 0,
    skillLevel: formData.get("skillLevel")?.toString() || SkillLevel.Beginner,
    description: formData.get("skillDescription")?.toString() || "",
    tags: formData.get("tags") || [],
    lastUpdated: new Date(),
    createdAt: new Date(),

    }   
   
  },
  
);
if(newSkill) {
 redirect("/")
}
 
} else {
    throw new Error("Must be authenticated");
} 

}