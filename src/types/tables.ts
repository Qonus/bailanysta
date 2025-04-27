import { posts } from "@/lib/db/schema";
import { InferSelectModel } from "drizzle-orm";

export type IPost = InferSelectModel<typeof posts>

export interface IPostUser {
    user: IUser | null;
    id: string;
    userId: string;
    content: string;
    created_at: Date;
}

export interface IUser {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    username: string | null;
}