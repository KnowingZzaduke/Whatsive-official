import { useTranslation } from "react-i18next";
import videoWhatsive from "/video/whatsive-video-black.mp4";
import { Button } from "@nextui-org/react";
import { FaSquareYoutube, FaRegLightbulb } from "react-icons/fa6";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-black rounded-t-full overflow-hidden">
      <div className="flex items-center justify-around py-4 align-middle">
        <div className="flex flex-col text-white">
          <h2 className="text-xl font-semibold">
            {t("footerInformation.title")}
          </h2>
          <h5 className="text-sm">{t("footerInformation.subtitle")}</h5>
        </div>
        <div>
          <Button color="warning" className="w-48">
            {t("footerInformation.textButton")}
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-around py-4 align-middle">
        <video
          rel="preload"
          src={videoWhatsive}
          loop
          autoPlay
          className="w-20 lg:w-28"
        />
        <div>
          <ul className="flex gap-4">
            <li>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                title="Youtube"
              >
                <FaSquareYoutube className="text-white text-2xl hover:text-whatsive-color" />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-whatsive-color"
              >
                <FaRegLightbulb className="text-white text-2xl hover:text-whatsive-color" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
