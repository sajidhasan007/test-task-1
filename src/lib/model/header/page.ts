import { ReactNode } from "react";

export interface MenuItem {
  title: string | ReactNode;
  key: string;
  level: number;
  subMenuItems?: MenuItem[];
  link?: string;
  icon?: any;
}

export interface IMainMenu {
  menuItems: MenuItem[] | undefined;
  setSelectedItems: (items: MenuItem[]) => void; // Corrected type
  selectedItems: MenuItem[];
}
