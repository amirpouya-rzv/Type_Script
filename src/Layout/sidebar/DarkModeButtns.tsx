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
  const { collapsed } = useAppSelector((state) => state.uiManagerReducer);

  return (
    <div className="flex justify-between md:justify-end md:mt- md:mx-2 items-center  ">
      {/* <button
        className={`block mt-8 transition-all transform ${them === "dark" ? "rotate-45" : ""}`}
        onClick={() => {
          dispatch(togleThem());
        }}
      >
        {them === "light" ? (
          <BsMoon size={25} className="text-gray-400 mt-3 mx-2" />
        ) : (
          <RiSunLine size={25} className="text-yellow-300 mt-5 mx-2" />
        )}
      </button> */}
      <div>
  <img
    className={`w-20 mx-24 mt-10 rounded-full transition-all duration-300 ${
      collapsed ? "md:w-8 md:mx-auto" : "md:w-20 md:mx-24"
    }`}
    src="/picture/images.png"
    alt="logo"
  />
</div>
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
