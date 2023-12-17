import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
function SectionFunction() {
  const { t } = useTranslation();
  const functions = [
    {
      title: t("sectionFunctions.createAcount.title"),
      description: t("sectionFunctions.createAcount.description"),
      image: "/img/create.webp",
    },
    {
      title: t("sectionFunctions.qr.title"),
      description: t("sectionFunctions.qr.description"),
      image: "/img/qr-code.webp",
    },
    {
      title: t("sectionFunctions.messages.title"),
      description: t("sectionFunctions.messages.description"),
      image: "/img/push-people.webp",
    },
  ];
  return (
    <section className="sm:min-h-screen lg:min-h-full xl:min-h-screen bg-black flex flex-col w-full items-center justify-center">
      <div>
        <h2 className="text-whatsive-color text-4xl text-center">
          ¿Cómo funciona?
        </h2>
        <p className="text-white text-center py-3">Crea tu instancia para comenzar a enviar mensajes</p>
      </div>
      <div className="grid grid-cols-auto gap-3 w-full">
        {functions &&
          functions.map((item, index) => (
            <Card className="py-4 m-2 animate-bounce" key={index}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-center">
                  {item.description}
                </p>
                <h4 className="font-bold text-large">{item.title}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-3 justify-center items-center">
                <Image
                  alt={"Imagen de carta" +  ' ' + index}
                  className="object-cover rounded-xl"
                  src={item.image}
                  width={250}
                />
              </CardBody>
            </Card>
          ))}
      </div>
    </section>
  );
}

export default SectionFunction;
