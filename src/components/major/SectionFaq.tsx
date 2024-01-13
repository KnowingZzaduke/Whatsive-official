import { useTranslation } from "react-i18next";
import {
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react";

function SectionFaq() {
  const { t } = useTranslation();
  const descriptionContent = t("sectionFaq.easyUse.list", { returnObjects: true })
  console.log(descriptionContent);
  const Faq = [
    {
      title: t("sectionFaq.easyUse.title"),
      description: t("sectionFaq.easyUse.list", { returnObjects: true }),
      image: "/img/create.webp",
    },
    {
      title: t("sectionFaq.opinions.title"),
      description: t("sectionFaq.opinions.list"),
      image: "/img/qr-code.webp",
    },
    {
      title: t("sectionFaq.functions.title"),
      description: t("sectionFaq.functions.list"),
      image: "/img/qr-code.webp",
    },
    {
      title: t("sectionFaq.sure.title"),
      description: t("sectionFaq.sure.list"),
      image: "/img/qr-code.webp",
    },
  ];

  return (
    <section className="lg:min-h-full xl:min-h-screen flex flex-col w-full items-center justify-center bg-black">
      <h2 className="text-whatsive-color text-4xl text-center py-3">FAQ</h2>
      <div className="grid grid-cols-auto gap-3 w-full">
        {Faq &&
          Faq.map((item, index) => (
            <Card className="py-4 m-2 animate-bounce" key={index}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-center">
                  
                </p>
                <h4 className="font-bold text-large">{item.title}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-3 justify-center items-center">
                <Image
                  alt={"Imagen de carta" + " " + index}
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

export default SectionFaq;
