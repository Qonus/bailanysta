import { getTranslations } from "next-intl/server";

export default async function Profile() {
  const t = await getTranslations('HomePage');
  return (
    <div className="container">
      This is Profile
    </div>
  );
}
