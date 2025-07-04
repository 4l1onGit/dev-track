"use server";
import { prisma } from "@/prisma/prisma"
import { auth } from "../_lib/auth/auth";
import { Category, Confidence, Skill, SkillLevel } from "@prisma/client";



export const getUserSkills = async () => {
    const session = await auth();
    const skills = await prisma.skill.findMany({
  where: {
    userId: session?.user?.id, // or whatever your user ID variable is
  },
});
    return skills;
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

} else {
    throw new Error("Must be authenticated");
} 
}