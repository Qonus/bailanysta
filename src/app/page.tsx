import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home() {
  const t = await getTranslations('HomePage');
  return (
    <>{t('title')}</>
  );
}
