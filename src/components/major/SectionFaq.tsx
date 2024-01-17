import { useTranslation } from "react-i18next";
import { ListFaq } from "../../types/listFaq";
import { FaMobileScreenButton } from "react-icons/fa6";
import {
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

function SectionFaq() {
  const { t } = useTranslation();
  const Faq: ListFaq[] = [
    {
      title: t("sectionFaq.easyUse.title"),
      description: t("sectionFaq.easyUse.list", { returnObjects: true }),
      image: "/img/cuestion.webp",
    },
    {
      title: t("sectionFaq.opinions.title"),
      description: t("sectionFaq.opinions.list", { returnObjects: true }),
      image: "/img/service.webp",
    },
    {
      title: t("sectionFaq.functions.title"),
      description: t("sectionFaq.functions.list", { returnObjects: true }),
      image: "/img/functions.webp",
    },
    {
      title: t("sectionFaq.sure.title"),
      description: t("sectionFaq.sure.list", { returnObjects: true }),
      image: "/img/security.webp",
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
                <h4 className="font-bold text-large">{item.title}</h4>
                <ul className="list-disc">
                  {item.description.map((item) => (
                    <li className="m-2">{item}</li>
                  ))}
                </ul>
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
      <div className="flex flex-col items-center">
        <h3 className="text-2xl py-4 text-whatsive-color">
          {t("sectionFaq.questionsContacts.text")}
        </h3>
        <Button className="flex items-center bg-whatsive-color text-white py-4" style={{width: "220px"}}>
          <p>Contactar</p>
          <FaMobileScreenButton />
        </Button>
      </div>
    </section>
  );
}

export default SectionFaq;
