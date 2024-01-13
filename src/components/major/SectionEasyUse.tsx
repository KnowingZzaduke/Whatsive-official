import { useTranslation } from "react-i18next";
import { Image } from "@nextui-org/react";
import { FaRegCircleCheck } from "react-icons/fa6";
import "../../index.css";

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
    <section className="lg:min-h-full xl:min-h-screen flex flex-col w-full items-center justify-center section-con-fondo">
      <h2 className="text-whatsive-color text-4xl text-center py-3">
        {infoUse.title}
      </h2>
      <div className="flex-col sm:justify-center gap-3 flex lg:flex-row xl:flex-row items-center">
        <div>
          <Image
            alt="Hombre en megafono"
            src="/img/megaphone-people-w.webp"
            width={350}
          />
        </div>
        <div>
          <h3 className="text-2xl text-center lg:text-start">
            {infoUse.subtitle}
          </h3>
          <ul className="flex flex-col items-center lg:items-start xl:items-start">
            {infoUse &&
              infoUse.points.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-2 items-center lg:py:5 xl:py-0 py-2"
                  style={{ width: "226px" }}
                >
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
