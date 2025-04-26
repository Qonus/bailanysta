import { getTranslations } from "next-intl/server";

export default async function Home() {
  // const posts = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/`);
  const t = await getTranslations('HomePage');
  return (
    <div className="container">
      {t('title')}
      This is Home Page
    </div>
  );
}
