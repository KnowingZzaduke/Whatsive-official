import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaHouse,
  FaLightbulb,
  FaYoutube,
  FaSearchengin,
  FaCreditCard,
} from "react-icons/fa6";
function MainNavbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const menuItems = [
    {
      name: t("menu.start"),
      path: "/",
      icon: FaHouse,
    },
    {
      name: t("menu.api"),
      path: "/",
      icon: FaLightbulb,
    },
    {
      name: t("menu.tutorials"),
      path: "/",
      icon: FaYoutube,
    },
    {
      name: t("menu.planes"),
      path: "/",
      icon: FaCreditCard,
    },
    {
      name: t("menu.information"),
      path: "/",
      icon: FaSearchengin,
    },
  ];
  return (
    <Navbar
      isBordered
      isBlurred
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Whatsive</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" to="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            variant="flat"
            style={{ backgroundColor: "#2bb741", color: "white" }}
          >
            {t("menu.login")}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="primary" className="w-full" to={item.path}>
              <div className="flex items-center gap-2">
                <item.icon />
                {item.name}
              </div>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default MainNavbar;
