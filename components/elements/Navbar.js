"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import ModeToggle from "@/components/elements/ThemeToggle";
import GlobalSearch from "@/components/elements/GlobalSearch";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
const dummyOptions = [
  {
    name: "Home",
    link: "/home",
    childrenMenu: [
      {
        name: "Home/Login",
        link: "/home/login",
      },
      {
        name: "Customize",
        link: "/customize",
      },
    ],
  },
  { name: "About", link: "/about", childrenMenu: [] },
  { name: "Contact", link: "/contact", childrenMenu: [] },
];
const Navbar = () => {
  return (
    <div className=" sticky top-0 mx-0 md:mx-4 lg:mx-8 pt-2">
      <Menubar className=" p-0 sm:p-4 justify-between  lg:justify-between ">
        <div className="hidden sm:flex  ">
          {dummyOptions.map((item, index) => {
            return (
              <MenubarMenu key={index}>
                <MenubarTrigger>{item.name}</MenubarTrigger>

                {item?.childrenMenu?.length > 0 ? (
                  <MenubarContent>
                    {item.childrenMenu.map((subitem, subindex) => {
                      return (
                        <>
                          <MenubarItem>{subitem?.name}</MenubarItem>
                          <MenubarSeparator />
                        </>
                      );
                    })}
                  </MenubarContent>
                ) : (
                  <></>
                )}
              </MenubarMenu>
            );
          })}
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>
        <div className="flex sm:hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-6">
                  Menu🤘
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col w-[18rem] p-4">
                  {dummyOptions.map((item, index) => {
                    return (
                      <NavigationMenuLink key={index}>
                        {item.name}
                      </NavigationMenuLink>
                    );
                  })}

                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex justify-center items-center gap-3 pr-4 lg:pr-0  ">
          <GlobalSearch />
          <ModeToggle />
        </div>
      </Menubar>
    </div>
  );
};
export default Navbar;
