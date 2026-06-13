import { TooltipSides } from "@/components/shared/Toolip";
import { IconType } from "react-icons";
import { NavLink, To } from "react-router-dom";

type SidebarItemType = {
  title: string;
  Icon: IconType;
  to: To;
};

const SideBarItem = ({ Icon, title, to }: SidebarItemType) => {
  return (
    <li>
      <TooltipSides title={title} side="left">
        <NavLink
          to={to}
          className={({ isActive }) =>
            `items-center rounded-full px-3 py-2 transition-all bg-black hover:bg-dark_green/90
            hover:text-white border-l-2 border-l-dark_green border-r-2 border-r-dark_green 
            dark:hover:bg-white/20 dark:border-l-white dark:border-r-white dark:shadow-white 
            flex gap-5 mx-2 mt-5
            ${isActive && "bg-dark_green/80 text-white dark:bg-white/10 backdrop-blur-sm"}`
          }
        >
          <Icon size={20} />
          <span>محصولات</span>
        </NavLink>
      </TooltipSides>
    </li>
  )
}

export default SideBarItem;
