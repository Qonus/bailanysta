'use server'

import { auth } from "@/lib/auth";
import { getBaseUrl } from "@/lib/utils";
import { redirect } from "next/navigation";

export async function getPosts() {
    const data = await fetch(`${getBaseUrl()}/api/posts/`, { cache: "no-store" });
    const posts = await data.json();
    return posts;
}

export async function getUserPosts(userId: string) {
    const data = await fetch(`${getBaseUrl()}/api/posts?userid=${userId}`, { cache: "no-store" });
    const posts = await data.json();
    return posts;
}

export async function getPost(id: string) {
    const response = await fetch(`${getBaseUrl()}/api/posts/${id}`, { cache: "no-store" });
    const post = await response.json();
    // const user_response = await fetch(`${getBaseUrl()}/api/users/${post.userId}`, { cache: "no-store" })
    return post;
}

export async function createPost(formData: FormData) {
    const session = await auth();

    if (!session) return;

    const post = {
        userId: session.user.id,
        content: formData.get("content") as string,
    }

    const data = await fetch(`${getBaseUrl()}/api/posts/`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        }
    );

    const newPost = await data.json();

    // toast.success(
    //     "Posted Successfully! Your Post:",
    //     {
    //         description: (
    //             <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4" >
    //                 <code className="text-white"> {JSON.stringify(post, null, 2)} </code>
    //             </pre>
    //         ),
    //         action: {
    //             label: "Undo",
    //             onClick: () => console.log("Undo")
    //         }
    //     }
    // );
    redirect(`/posts/${newPost.id}`);
}