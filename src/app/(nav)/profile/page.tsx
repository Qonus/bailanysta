import { getTranslations } from "next-intl/server";

export default async function Profile() {
  const t = await getTranslations('HomePage');
  return (
    <div className="container">
      {t('title')} 
      This is Profile
    </div>
  );
}
