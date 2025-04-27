import { Icons } from "@/components/icons/icons";
import PostCard from "@/components/posts/post-card";
import { auth } from "@/lib/auth";
import { IPostUser } from "@/types/tables";
import { redirect } from "next/navigation";
import { getPosts } from "../posts/actions";
import { getUserByID } from "../users/actions";

export default async function Home({ }) {
  const posts = await getPosts();

  const session = await auth();
  if (!session || !session.user) redirect('/sign-in');
  // console.error(posts);
  // const t = await getTranslations('HomePage');

  const user = await getUserByID(session.user.id);

  return (
    <div>
      <div className="hover-block">
        <div className="flex gap-3 items-center p-4">
          <Icons.profile user={user || undefined} size={50} />
          {session.user.name}
        </div>

      </div>
      {posts.map((post: IPostUser) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
