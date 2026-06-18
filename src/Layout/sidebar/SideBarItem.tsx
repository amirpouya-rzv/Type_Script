import { TooltipSides } from "@/components/shared/Toolip";
import { useAppSelector } from "@/redux/ui_management/reduxHook";
import { IconType } from "react-icons";
import { NavLink, To } from "react-router-dom";

type SidebarItemType = {
  title: string;
  Icon: IconType;
  to: To;
};

const SideBarItem = ({ Icon, title, to }: SidebarItemType) => {
  const { collapsed } = useAppSelector((state) => state.uiManagerReducer);
  const isCollapsed = collapsed && window.innerWidth >= 768;
  return (
    <li>
      <TooltipSides title={title} side="left" disabled={!isCollapsed}>
        <NavLink
          to={to}
          className={({ isActive }) =>
            `items-center rounded-full px-3 py-2 transition-all 
            hover:bg-dark_green/90 hover:text-white
            border-l-2 border-l-dark_green border-r-2 border-r-dark_green
            dark:hover:bg-white/20 dark:border-l-white dark:border-r-white
            flex gap-5 mx-2 mt-5
            ${isActive && "bg-dark_green/80 text-white dark:text-white dark:bg-white/10 backdrop-blur-sm"}
            ${collapsed ? "justify-center " : ""}`
          }
        >
          <Icon size={20} />
          {!isCollapsed && <span>{title}</span>}
        </NavLink>
      </TooltipSides>
    </li>
  );
};

export default SideBarItem;
