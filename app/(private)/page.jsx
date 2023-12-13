"use client";
import Tile from "@/components/elements/Tile";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import usePagination from "../../hooks/Pagination";
import { Card } from "@/components/ui/card";
import axios from "axios";
const itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { items, numberOfPages } = usePagination(itemList, 9, currentPage);
  useEffect(() => {
    axios
      .get("api/user")
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);
  return (
    <div className="max-w-screen-xl px-8  w-full py-4 xl:px-0">
      <Card className="h-full flex flex-col p-2">
        <div className="flex-1 flex w-full flex-wrap gap-5 overflow-auto content-start   justify-center p-2">
          {items?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full sm:w-4/12 md:w-4/12 lg:w-3/12 xl:w-2/12"
              >
                <Tile key={index} />
              </div>
            );
          })}
        </div>
        <div className="flex shrink-0 justify-center  pb-8 ">
          <Card className="w-max p-2 gap-4 flex">
            {[...Array(numberOfPages).keys()].map((item, index) => {
              return (
                <Button
                  variant={currentPage - 1 === index ? "" : "secondary"}
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </Button>
              );
            })}
          </Card>
        </div>
      </Card>
    </div>
  );
}
