import { Icons } from "@/components/icons/icons";
import PostCard from "@/components/posts/post-card";
import Username from "@/components/users/username";
import { auth } from "@/lib/auth";
import { IPost } from "@/types/tables";
import { redirect } from "next/navigation";
import { getPosts } from "../posts/actions";
import { getUserByID, getUserLikes } from "../users/actions";

export default async function Home({ }) {
  const posts = await getPosts();

  const session = await auth();
  if (!session || !session.user) redirect('/sign-in');
  // console.error(posts);
  // const t = await getTranslations('HomePage');

  const user = await getUserByID(session.user.id);
  const userLikes = await getUserLikes(session.user.id);

  return (
    <div>
      <div className="hover-block">
        <div className="flex gap-3 items-center p-4">
          <Icons.profile user={user || undefined} size={50} />
          <div className="flex gap-1 items-center">
            {session.user.name}
            <Username username={user?.username || undefined} />
          </div>
        </div>

      </div>
      {posts.map(async (post: IPost) => {
        return (
          <PostCard key={post.id} initialIsLiked={userLikes.includes(post.id)} post={post} />
        );
      })
      }
    </div>
  );
}
