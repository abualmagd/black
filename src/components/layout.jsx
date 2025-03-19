import { Footer } from "./footer";
import { LetWork } from "./letWork";
import { MyHeader } from "./header";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
export function Layout({ children }) {
  const { t } = useTranslation();
  return (
    <div
      dir={t("dir")}
      className="layout-main  bg-base-100 flex items-center  flex-col   w-full justify-start md:px-20 "
    >
      <MyHeader />
      {children}
      <LetWork />
      <div className="h-10"></div>
      <Footer />
    </div>
  );
}
