import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
const Tile = () => {
  return (
    <Card className="w-full hover:scale-[1.01] hover:bg-secondary/20">
      <CardHeader className="flex flex-row items-center flex-wrap justify-between p-2 ">
        <CardTitle className="pt-2">Convert PDF</CardTitle>
        <Button variant="outline" size="icon" className="pt-0">
          <ChevronRightIcon className="h-4 w-4 " />
        </Button>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent className="p-2">
        This is my text tututuru <br />
        this are my details 🧐 <br /> and this is 🔥🔥
        <Separator className="my-2" />
        <span>View Details</span>
      </CardContent>
    </Card>
  );
};
export default Tile;
