import { IPost } from "@/types/tables";
import { Box, Tabs, Text } from "@radix-ui/themes";
import PostCard from "../posts/post-card";

export default function UserActivity(
    { userLikes, posts }:
        { userLikes: string[], posts: IPost[] }
) {
    return (
        <Tabs.Root defaultValue="posts">
            <Tabs.List>
                <Tabs.Trigger value="posts">Posts</Tabs.Trigger>
                <Tabs.Trigger value="comments">Comments</Tabs.Trigger>
            </Tabs.List>

            <Box>
                <Tabs.Content value="posts">
                    {posts.map((post) => (
                        <PostCard initialIsLiked={userLikes.includes(post.id)} key={post.id} post={post} />
                    ))}
                </Tabs.Content>

                <Tabs.Content value="comments">
                    <Text size="2">Access and update your documents.</Text>
                </Tabs.Content>
            </Box>
        </Tabs.Root>
    );
}