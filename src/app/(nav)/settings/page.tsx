import { getTranslations } from "next-intl/server";

export default async function Settings() {
  const t = await getTranslations('HomePage');
  return (
    <div className="container">
      This is Settings
    </div>
  );
}
