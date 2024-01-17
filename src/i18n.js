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
          sectionFaq: {
            easyUse: {
              title: "Easy-to-Use Mass Messaging",
              list: [
                "Send mass messages to your WhatsApp contacts using our messaging application.",
                "Create instances to scan your phone contacts and efficiently send messages.",
                "Simplify messaging to many contacts by creating broadcasts.",
                "Enjoy a clean and straightforward user interface, accessible with just a few clicks.",
              ],
            },
            opinions: {
              title: "How Good is the Service Offered by Whatsive?",
              list: [
                "Our customer service agents respond in less than 1 hour.",
                "We ensure that our customers always get the help they need in a timely manner.",
                "We are here to address your inquiries and provide the support you require.",
              ],
            },
            functions: {
              title: "What Are the Features of Whatsive?",
              list: [
                "Easily send text messages, images, and contacts.",
                "Import contacts from WhatsApp or via .xlsx or .vs files.",
                "Manage your contacts by deleting, creating, and editing broadcasts.",
                "Create custom chats for direct communication with your clients.",
              ],
            },
            sure: {
              title: "Is Whatsive Safe?",
              list: [
                "We guarantee the safe and prompt delivery of your messages.",
                "Your messages are handled privately, and only recipients can access them.",
                "Trust us for secure and confidential communication.",
              ],
            },
            questionsContacts:{
              text: "If you have questions, ¡contact us here!",
              button: "Contact"
            }
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
            subtitle: "Comunícate con tus clientes mediante nuestra API",
            pointOne: "Mayor alcance a los clientes",
            pointTwo: "Rápido envío de mensajes",
            pointThree: "Gran cantidad de mensajes",
          },
          sectionFaq: {
            easyUse: {
              title: "Mensajería masiva fácil de usar",
              list: [
                "Envía mensajes masivos a tus contactos de WhatsApp utilizando nuestra aplicación de mensajería.",
                "Crea instancias para escanear los contactos de tu teléfono y enviar mensajes de manera eficiente.",
                "Facilita el envío de mensajes a muchos contactos con la creación de difusiones.",
                "Disfruta de una interfaz de usuario limpia y sencilla, accesible con solo unos pocos clics.",
              ],
            },
            opinions: {
              title: "¿Que tal es el servicio que ofrece Whatsive?",
              list: [
                "Nuestros agentes de servicio al cliente responden en menos de 1 hora.",
                "Garantizamos que nuestros clientes siempre obtengan la ayuda que necesitan de manera oportuna.",
                "Estamos aquí para resolver tus consultas y brindarte el soporte que necesitas.                ",
              ],
            },
            functions: {
              title:
                "¿Cuáles son las funcionalidades de Whatsive?              ",
              list: [
                "Envía mensajes de texto, imágenes y contactos con facilidad.                ",
                "Importa contactos desde WhatsApp o mediante archivos .xlsx o .vs.                ",
                "Administra tus contactos eliminando, creando y editando difusiones.                ",
                "Crea chats personalizados para una comunicación directa con tus clientes.                ",
              ],
            },
            sure: {
              title: "¿Es seguro Whatsive?              ",
              list: [
                "Garantizamos el envío seguro y rápido de tus mensajes.                ",
                "Tus mensajes son manejados de forma privada y solo los destinatarios pueden acceder a ellos.                ",
                "Confía en nosotros para una comunicación segura y confidencial.                ",
              ],
            },
            questionsContacts:{
              text: "Si tienes dudas, ¡contactanos aquí!",
              button: "Contactar"
            }
          },
        },
      },
    },
  });

export default i18n;
