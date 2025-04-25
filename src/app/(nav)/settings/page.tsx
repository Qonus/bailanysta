import { auth } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

export default async function Settings() {
  const session = await auth();

  if (!session) {
    redirect('/sign-in');
  }

  const t = await getTranslations('HomePage');
  return (
    <div className="container">
      {t('title')}
      This is Settings

    </div>
  );
}
