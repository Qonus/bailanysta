import { getPost } from "../actions";

export default async function PostPage({ params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const post = await getPost(id);
    console.log(post);
    return (
        <div className="page flex justify-center">
            <div className="">
                <h2>POST ID: {post.id}</h2>
                <h2>AUTHOR: {post.userId}</h2>
                <h2>POST CONTENT: {post.content}</h2>

            </div>
        </div>
    );
}