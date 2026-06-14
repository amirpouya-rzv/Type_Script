// import { useAppSelector } from "../../redux/ui_management/reduxHook";
// import { GiMoonBats, GiSunflower } from "react-icons/gi";
import {
  setShowSidebar,
  // togleThem,
} from "../../redux/ui_management/uiManagement";
import { useDispatch } from "react-redux";
// import { BsMoon } from "react-icons/bs";
// import { RiSunLine } from "react-icons/ri";

const DarkModeButtns = () => {
  // const { them } = useAppSelector((state) => state.uiManagerReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <button
        className={`flex justify-between gap-4 items-center`}
        onClick={() => {
          dispatch(togleThem());
        }}
      >
        {them === "light" ? (
          <>
            حالت تاریک :
            <BsMoon size={18} className="text-black/30" />
          </>
        ) : (
          <>
            حالت روشن :
            <RiSunLine size={18} className="text-yellow-400" />
          </>
        )}
      </button> */}
      <button
        className="block md:hidden  mr-4 transition-all transform hover:scale-110"
        onClick={() => {
          dispatch(setShowSidebar(false));
        }}
      ></button>
      {/* items */}
    </div>
  );
};

export default DarkModeButtns;
