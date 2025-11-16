"use server";
//import { ID, Query } from "node-appwrite"
//import { users } from "../appwrite.config"
import { prisma } from "../prisma";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
    try {
        const newuser = await prisma.users.create(

            {
                data: {
                    name: user.name,
                    telephone: user.phone,
                },
            }
        )
        return parseStringify(newuser);
    } catch (error: any) {
        console.log(error)

    }
}

export const getUser = async (userId: string) => {
    try {
        const user = await prisma.users.findUnique({
            where: { id: userId }
        });
        return parseStringify(user)
    } catch (error) {
        console.log(error)
    }
}