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
            login: "Login",
          },
          sectionFunctions: {
            createAcount: {
              title: "Create acount",
              description:
                "To create instances you must first create an account.",
            },
            qr: {
              title: "Scan qr code",
              description:
                "Create your instance and scan the qr code with your phone to start sending messages to your contacts.",
            },
            messages: {
              title: "Send messages",
              description:
                "You can send all types of messages and also you can create broadcasts to send messages to many of your contacts too quickly.",
            },
          },
          sectionEasyUse: {
            title: "Whastive is easy to use",
            subtitle: "Communicate with your clients through our API",
            pointOne: "Greater reach to clients",
            pointTwo: "Fast sending of messages",
            pointThree: "Larg amount of messages",
          },
        },
      },
      es: {
        translation: {
          menu: {
            start: "Inicio",
            api: "API WHATSIVE",
            tutorials: "Tutoriales",
            planes: "Planes",
            information: "Información",
            login: "Iniciar sesión",
          },
          sectionFunctions: {
            createAcount: {
              title: "Crea una cuenta",
              description:
                "Para crear las instancias primero debes crear una cuenta.",
            },
            qr: {
              title: "Escanea el código QR",
              description:
                "Crea tu instancia y escanea el código QR con tu teléfono para comenzar a enviar mensajes a tus contactos.",
            },
            messages: {
              title: "Envía mensajes",
              description:
                "Puedes enviar todo tipo de mensajes y también puedes crear difusiones para enviar mensajes a muchos de tus contactos más rápido.",
            },
          },
          sectionEasyUse: {
            title: "Whastive es de facil uso",
            subtitle: "Comunícate contus clientes mediante nuestra API",
            pointOne: "Mayor alcance a los clientes",
            pointTwo: "Rápido envío de mensajes",
            pointThree: "Gran cantidad de mensajes",
          },
        },
      },
    },
  });

export default i18n;
