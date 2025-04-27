import { Icons } from "@/components/icons/icons";
import PostCard from "@/components/posts/post-card";
import { auth } from "@/lib/auth";
import { IPost } from "@/types/tables";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { getPosts } from "../posts/actions";

export default async function Home({ }) {
  const posts = await getPosts();

  const session = await auth();
  if (!session || !session.user) redirect('/sign-in');

  const t = await getTranslations('HomePage');

  return (
    <div>
      <div className="hover-block">
        <div className="flex gap-3 items-center p-4">
          <Icons.profile size={50} />
          {session.user.name}
        </div>

      </div>
      {posts.map((post: IPost) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
