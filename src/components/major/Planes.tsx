import {
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { TypePlanes } from "../../types/planes";
import { Link } from "react-router-dom";

function Planes() {
  const { t } = useTranslation();
  const planes: TypePlanes[] = [
    {
      title: t("sectionPlanes.freePlane.title"),
      subtitle: t("sectionPlanes.freePlane.subtitle"),
      price: "0",
      list: t("sectionPlanes.freePlane.list", { returnObjects: true }),
    },
    {
      title: t("sectionPlanes.monthlyPlaneFirts.title"),
      subtitle: null,
      price: "5/mes",
      list: t("sectionPlanes.monthlyPlaneFirts.list", { returnObjects: true }),
    },
    {
      title: t("sectionPlanes.monthlyPlaneSecond.title"),
      subtitle: t("sectionPlanes.monthlyPlaneSecond.subtitle"),
      price: "12/ x 3 meses",
      list: t("sectionPlanes.monthlyPlaneSecond.list", { returnObjects: true }),
    },
  ];
  return (
    <section className="lg:min-h-full xl:min-h-screen flex flex-col w-full items-center justify-center">
      <h2 className="text-whatsive-color text-4xl text-center py-3">Planes</h2>
      <div className="grid grid-cols-auto gap-2 w-full justify-center">
        {planes &&
          planes.map((item, index) => (
            <Card
              className="py-4 mx-auto my-4 lg:my-0 w-9/12 transition ease-in-out delay-150 shadow-2xl border-2 border-gray-200 hover:border-gray-300 hover:ease-in-out hover:transition hover:hover:-translate-y-1"
              key={index}
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center">
                <h4 className="font-bold text-large text-whatsive-color text-center">
                  {item.title}
                </h4>
                <h5 className="font-bold">{item.subtitle}</h5>
                <h3 className="font-bold">${item.price}</h3>
              </CardHeader>
              <CardBody className="justify-center">
                <ul>
                  {item.list.map((list) => (
                    <li className="border-b-1 my-4 w-9/12">🟢{list}</li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter className="flex justify-center">
                <Link
                  to="https://api.whatsive.com/signin"
                  target="_blank"
                  className="w-full flex justify-center"
                >
                  <Button color="success" className="w-9/12">
                    {t("sectionPlanes.buttonPlanes.text")}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>
    </section>
  );
}

export default Planes;
