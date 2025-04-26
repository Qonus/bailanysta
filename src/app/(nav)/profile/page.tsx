import EditProfileButton from "@/components/edit-profile";
import { Icons } from "@/components/icons/icons";
import { auth } from "@/lib/auth";
import { Box, Tabs, Text } from "@radix-ui/themes";

export default async function Profile() {
  const session = await auth();
  // const t = await getTranslations('Profile');
  return (
    <div className="h-screen px-4 pt-20 max-w-160 m-auto">

      <div className="pb-5 flex flex-col gap-5 border-b-1 border-b-current/10">
        <Icons.profile size={100} />
        <div className="flex flex-col gap-5 justify-between md:flex-row">
          <div>
            <p className="text-xl font-bold">
              {session?.user?.name || "Username"}
            </p>
            <p className="text-foreground/50">
              {session?.user?.email || "Email"}
            </p>
          </div>
          <EditProfileButton />
        </div>
      </div>

      <Tabs.Root defaultValue="posts">
        <Tabs.List>
          <Tabs.Trigger value="posts">Posts</Tabs.Trigger>
          <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>

        <Box pt="3">
          <Tabs.Content value="posts">
            <Text size="2">Test Post</Text>
          </Tabs.Content>

          <Tabs.Content value="documents">
            <Text size="2">Access and update your documents.</Text>
          </Tabs.Content>

          <Tabs.Content value="settings">
            <Text size="2">Edit your profile or update contact information.</Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>

    </div>
  );
}
