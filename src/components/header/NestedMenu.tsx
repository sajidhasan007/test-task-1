"use client";
import { MenuItem } from "@/lib/model/header/page";
import { useState } from "react";
import MainMenu from "./MainMenu";

import { SlUserFemale } from "react-icons/sl";
import { PiFlowerTulipLight } from "react-icons/pi";
import { FiWatch } from "react-icons/fi";
import { IoIosMan } from "react-icons/io";
import { MdOutlinePregnantWoman } from "react-icons/md";
import { MdOutlinePrint } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { RiGitBranchLine } from "react-icons/ri";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { RiHome4Line } from "react-icons/ri";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { PiCatLight } from "react-icons/pi";

const NestedMenu: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  // console.log("my selected item is = ", selectedItems);

  return (
    <div className="flex flex-wrap absolute top-auto z-50 bg-white">
      <MainMenu
        menuItems={menuItems}
        setSelectedItems={setSelectedItems}
        selectedItems={selectedItems}
      />
      {selectedItems.map(
        (item: MenuItem) =>
          item.subMenuItems && (
            <MainMenu
              key={item.key}
              menuItems={item.subMenuItems}
              setSelectedItems={setSelectedItems}
              selectedItems={selectedItems}
            />
          )
      )}
    </div>
  );
};

export default NestedMenu;

const menuItems: MenuItem[] = [
  {
    title: "Womens’ & Girls’ Fashion",
    key: "women-girls-fation",
    level: 1,
    icon: <SlUserFemale />,
    link: "/women-girl-fasioon",
  },
  {
    title: "Health & Beauty",
    key: "health-beauty",
    level: 1,
    icon: <PiFlowerTulipLight />,
  },

  {
    title: "Watches, Bags, Jewellery",
    key: "watch-bags-jewellery",
    level: 1,
    icon: <FiWatch />,
    subMenuItems: [
      {
        title: "kids bags",
        key: "kids-bags",
        level: 2,
      },
      {
        title: "laptop bags & cases",
        key: "laptop-bags-cases",
        level: 2,
      },
      {
        title: "Luggage",
        key: "language",
        level: 2,
      },
      {
        title: "Travel Bags",
        key: "travel-bags",
        level: 2,
      },
      {
        title: "Men’s bag",
        key: "mens-bar",
        level: 2,
      },
      {
        title: "Women’s Bag",
        key: "womens-bag",
        level: 2,
        subMenuItems: [
          {
            title: "Backpacks",
            key: "backpacks",
            level: 3,
          },
          {
            title: "Cross Body & Shulder Bags",
            key: "cross-body-shulder-bags",
            level: 3,
          },
          {
            title: "Bag Charms& Accessories",
            key: "bag-charams-accessories",
            level: 3,
          },
          {
            title: "Clutches",
            key: "clutches",
            level: 3,
          },
          {
            title: "Top-Handle Bags",
            key: "top-Handle-Bags",
            level: 3,
          },
          {
            title: "Tote bags",
            key: "Tote-bags",
            level: 3,
          },
          {
            title: "wallets",
            key: "wallets",
            level: 3,
          },
        ],
      },
      {
        title: "Men’s Watches",
        key: "men-watches",
        level: 2,
      },
      {
        title: "Women’s Watches",
        key: "women-wathces",
        level: 2,
      },
      {
        title: "Kids Watches",
        key: "kids-watched",
        level: 2,
      },
      {
        title: "women’s jewellery",
        key: "womens-jewelley",
        level: 2,
      },
      {
        title: "men’s jewellery",
        key: "mens-jewellery",
        level: 2,
      },
      {
        title: "sunglasses",
        key: "sunglasses",
        level: 2,
      },
    ],
  },
  {
    title: "Men's & Boys' Fashion",
    key: "mens-boy-fasion",
    level: 1,
    icon: <IoIosMan />,
  },
  {
    title: "Mother & Baby",
    key: "Mother-Baby",
    level: 1,
    icon: <MdOutlinePregnantWoman />,
  },
  {
    title: "Electronics Devices",
    key: "Electronics-Devices",
    level: 1,
    icon: <MdOutlinePrint />,
  },
  {
    title: "TV & Home Appliances",
    key: "TV-Home-Appliances",
    level: 1,
    icon: <PiTelevisionSimpleBold />,
  },
  {
    title: "Electronic Accessories",
    key: "Electronic-Accessories",
    level: 1,
    icon: <RiGitBranchLine />,
  },
  {
    title: "Groceries",
    key: "groceries",
    level: 1,
    icon: <PiHandbagSimpleLight />,
  },
  {
    title: "Home & Lifestyle",
    key: "Home-Lifestyle",
    level: 1,
    icon: <RiHome4Line />,
  },
  {
    title: "Sports & Outdoors",
    key: "Sports-Outdoors",
    level: 1,
    icon: <MdOutlineSportsBaseball />,
  },
  {
    title: "Automobile ",
    key: "Automobile ",
    level: 1,
    icon: <FaCarAlt />,
  },
  {
    title: "Computer and laptop",
    key: "Computer-laptop",
    level: 1,
    icon: <IoIosPhonePortrait />,
  },
  {
    title: "Pet Supplies",
    key: "Pet-Supplies",
    level: 1,
    icon: <PiCatLight />,
  },
];
