import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home() {
  const t = await getTranslations('HomePage');
  return (
    <div className="m-auto bg-background">
      {t('title')}
    </div>
  );
}
