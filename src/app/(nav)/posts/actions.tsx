import { auth } from "@/lib/auth";
import { getBaseUrl } from "@/lib/utils";
import axios from "axios";
import { redirect } from "next/navigation";

export async function getUser(id: string) {
    const { data } = await axios.get(`${getBaseUrl()}/api/users/${id}`);
    return data;
}

export async function getPosts() {
    const { data } = await axios.get(`${getBaseUrl()}/api/posts/`);
    return data;
}

export async function getUserPosts(userId: string) {
    const { data } = await axios.get(`${getBaseUrl()}/api/posts?userid=${userId}`);
    return data;
}

export async function getPost(id: string) {
    const { data } = await axios.get(`${getBaseUrl()}/api/posts/${id}`);
    // const user_response = await fetch(`${getBaseUrl()}/api/users/${post.userId}`, { cache: "no-store" })
    return data;
}

export async function createPost(formData: FormData) {
    const session = await auth();
    if (!session) return;

    const post = {
        userId: session.user.id,
        content: formData.get("content") as string,
    };

    const { data: newPost } = await axios.post(`${getBaseUrl()}/api/posts/`, post, {
        headers: {
            'Content-Type': 'application/json',
        }
    });

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
