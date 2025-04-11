import database from "../db";
import { Prisma } from '@prisma/client'; // For proper typing

export class AuthService {
    async login() {
        // 1. Create with all required fields
        const user = await database.user.create({
            data: {
                email: "valid@example.com",
                peeeeeeeeeeeeeeeeeeeeeass: "ewwew"
                // password: "hashed_password_here", // Always hash passwords!
                // Include other required fields from your schema
            },
            select: { // Optional: Choose fields to return
                id: true,
                email: true
            }
        });

        return {
            message: "User created successfully",
            user
        };
    }
}