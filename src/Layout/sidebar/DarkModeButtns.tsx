import { useAppSelector } from "../../redux/ui_management/reduxHook";
import { GiMoonBats, GiSunflower } from "react-icons/gi";
import {
  setShowSidebar,
  togleThem,
} from "../../redux/ui_management/uiManagement";
import { useDispatch } from "react-redux";

const DarkModeButtns = () => {
  const { them } = useAppSelector((state) => state.uiManagerReducer);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between md:justify-end md:mt- md:mx-2 items-center  ">
      <button
        className={`block mt-5 transition-all transform ${them === "dark" ? "rotate-90" : ""}`}
        onClick={() => {
          dispatch(togleThem());
        }}
      >
        {them === "light" ? (
          <GiMoonBats size={30} className="text-gray-400 mt-3 mx-2" />
        ) : (
          <GiSunflower size={36} className="text-yellow-300 mt-5 mx-2" />
        )}
      </button>

      <button
        className="block md:hidden mt-5  mr-4 transition-all transform hover:scale-110"
        onClick={() => {
          dispatch(setShowSidebar(false));
        }}
      ></button>
      {/* items */}
    </div>
  );
};

export default DarkModeButtns;
