import { getTranslations } from "next-intl/server";

export default async function Settings() {
  const t = await getTranslations('HomePage');
  return (
    <div className="container">
      {t('title')}
      This is Settings
    </div>
  );
}
