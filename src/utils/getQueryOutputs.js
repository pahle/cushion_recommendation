'use server'

import prisma from "./prismaClient";
import { cookies } from "next/headers";

export const dataKriteria = async () => {
    console.log(cookies().get("id").value)
    try {
        const query = await prisma.user.findFirst({
            where: {
                id: parseInt(cookies().get("id").value)
            }
        })
        return query;
    } catch (error) {
        console.error(error);
    } finally {
        prisma.$disconnect();
    }
}