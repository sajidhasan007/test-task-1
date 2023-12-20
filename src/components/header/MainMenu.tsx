"use client";
import { IMainMenu, MenuItem } from "@/lib/model/header/page";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const MainMenu: React.FC<IMainMenu> = ({
  menuItems,
  setSelectedItems,
  selectedItems = [],
}) => {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const handleMenuHover = (item: MenuItem): void => {
    const removeGreaterLevel = selectedItems.filter(
      (selectedItem) => selectedItem.level <= item.level
    );
    const removePrevious = removeGreaterLevel.filter(
      (selectedItem) => selectedItem.level !== item.level
    );
    const updatedSelectedItems = [...removePrevious, item];
    setSelectedItems(updatedSelectedItems);
    setSelectedMenu(item?.title?.toString() as string);
  };
  return (
    <div className="main-menu ontent-container p-[6px] w-[330px] ">
      <div>
        {menuItems?.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer mb-1 transition ease-in-out delay-75 ${
              selectedMenu === item.title ? " text-site-primary" : ""
            }`}
            onMouseEnter={() => handleMenuHover(item)}
            onClick={() => item.link && router.push(item.link as string)}
          >
            <div
              className={`flex justify-between items-center mb-3 ${
                selectedMenu === item.title ? "" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                {item.icon && item.icon}
                <span>{item.title}</span>
              </div>
              {selectedMenu === item.title &&
                item?.subMenuItems &&
                item?.subMenuItems?.length > 0 && (
                  <MdOutlineKeyboardArrowRight />
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
