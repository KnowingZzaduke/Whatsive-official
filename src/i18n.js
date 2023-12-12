import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          menu: {
            start: "Start",
            api: "API WHATSIVE",
            tutorials: "Tutorials",
            planes: "Planes",
            information: "Information",
            login: "Login"
          },
        },
      },
      es:{
        translation: {
            menu: {
                start: "Inicio",
                api: "API WHATSIVE",
                tutorials: "Tutoriales",
                planes: "Planes",
                information: "Información",
                login: "Iniciar sesión"
            }
        }
      }
    },
  });

export default i18n;
