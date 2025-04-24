import { getTranslations } from "next-intl/server";

export default async function Notifications() {
  const t = await getTranslations('HomePage');
  return (
    <div className="container">
      This is Notifications
    </div>
  );
}
