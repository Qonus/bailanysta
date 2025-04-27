import { posts } from "@/lib/db/schema";
import { InferSelectModel } from "drizzle-orm";

export type Post = InferSelectModel<typeof posts>

export interface IPost {
    user: IUser | null;
    id: string;
    userId: string;
    content: string;
    created_at: Date;
    likes: number;
}

export interface IUser {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    username: string | null;
}