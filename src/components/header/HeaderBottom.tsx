"use client";
import React, { useRef, useState } from "react";
import NestedMenu from "./NestedMenu";
import { useOnClickOutside } from "usehooks-ts";
import Image from "next/image";
const HeaderBottom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const handleClickInside = () => {
    // Your custom logic here
    console.log("clicked inside");
  };

  useOnClickOutside(ref, handleClickOutside);
  return (
    <div className="content-container relative">
      <div className="flex justify-between items-center py-4">
        <div
          className="cursor-pointer"
          onMouseEnter={() => setIsOpen(true)}
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={"/system_logo.svg"}
            alt="system logo"
            width={129}
            height={38}
          />
        </div>
        <div>right logo</div>
      </div>
      {isOpen && (
        <div ref={ref} onClick={handleClickInside}>
          <NestedMenu />
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
