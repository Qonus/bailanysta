import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations('HomePage');
  return (
    <div className="container">
      {t('title')}
    </div>
  );
}
