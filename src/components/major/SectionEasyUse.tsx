import { useTranslation } from "react-i18next";
import { Image } from "@nextui-org/react";
import { FaRegCircleCheck } from "react-icons/fa6";

function SectionEasyUser() {
  const { t } = useTranslation();
  const infoUse = {
    title: t("sectionEasyUse.title"),
    subtitle: t("sectionEasyUse.subtitle"),
    points: [
      t(t("sectionEasyUse.pointOne")),
      t("sectionEasyUse.pointTwo"),
      t("sectionEasyUse.pointThree"),
    ],
  };

  return (
    <section className="sm:min-h-screen lg:min-h-full xl:min-h-screen flex flex-col w-full items-center justify-center">
      <h2 className="text-whatsive-color text-4xl text-center">
        {infoUse.title}
      </h2>
      <div className="sm:flex-col sm:justify-center gap-3 flex xl:flex-row items-center">
        <div>
          <Image
            alt="Hombre en megafono"
            src="/img/megaphone-people-w.webp"
            width={350}
          />
        </div>
        <div>
          <h3 className="text-2xl">{infoUse.subtitle}</h3>
          <ul>
            {infoUse &&
              infoUse.points.map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <FaRegCircleCheck />
                  <p className="font-semibold my-1">{item}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SectionEasyUser;
