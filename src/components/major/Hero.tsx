import Typed from "typed.js";
import { useRef, useEffect } from "react";
import PhoneWithMessages from "/img/ux-mensajes.webp";
import { Image } from "@nextui-org/react";
import "../../index.css";
function Hero() {
  const name2 = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      const typed2 = new Typed(name2.current, {
        strings: [
          "<p>¡Potencia tu comunicación en WhatsApp con Whatsive! Envía mensajes masivos de forma automatizada y eficiente, llegando a tu audiencia de manera impactante. Aprovecha la personalización y segmentación para entregar mensajes relevantes a difusiones específicas. Simplifica tu proceso de envío, ahorra tiempo y recursos. Descubre una solución integral para tus estrategias de marketing en WhatsApp. ¡Descubre el poder de Whatsive y lleva tu mensajería al siguiente nivel!",
        ],
        typeSpeed: 30,
      });
      return () => {
        typed2.destroy();
      };
    }, 3000);
  }, []);
  return (
    <div className="sm:min-h-screen lg:min-h-full lg:flex xl:min-h-screen items-center overflow-hidden">
      <div className="hero_text flex gap-2 w-full flex-col items-center">
        <h1
          className="font-extrabold text-center"
          style={{ color: "#2bb741", fontSize: "2.5rem" }}
        >
          "Deja atrás el envío manual de mensajes"
        </h1>
        <p
          ref={name2}
          className="mt-4 p-1 font-semibold text-center"
          style={{ maxWidth: "640px" }}
        ></p>
      </div>
      <div className="flex relative items-center justify-center w-full p-5">
        <Image
          width={450}
          alt="Teléfono con mensajes"
          src={PhoneWithMessages}
        />
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-200 opacity-75"></span>
      </div>
    </div>
  );
}

export default Hero;
