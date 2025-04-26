'use server'

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function getPost(id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`);
    const post = await response.json();
    // const user_response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/${post.userId}`)
    return post;
}

export async function createPost(formData: FormData) {
    const session = await auth();

    if (!session) return;

    const post = {
        userId: session.user.id,
        content: formData.get("content") as string,
    }

    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/`,
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