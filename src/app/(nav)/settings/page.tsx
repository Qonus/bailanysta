import LocaleSwitcher from "@/components/locale-switcher";
import ThemeSwitcher from "@/components/theme-switcher";
import TopBar from "@/components/top-bar";
import { getTranslations } from "next-intl/server";

export default async function Settings() {
  const t = await getTranslations('Settings');
  return (
    <div className="flex flex-col">
      <TopBar title={t("title")} />
      <div className="w-full h-fit">
        <div className="flex gap-3 p-10 block-border-b hover-block items-center">
          <p className="text-lg">
            {t("locale")}
          </p>
          <LocaleSwitcher />
        </div>
        <div className="flex gap-3 p-10 block-border-b hover-block items-center">
          <p className="text-lg">
            {t("theme")}
          </p>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
