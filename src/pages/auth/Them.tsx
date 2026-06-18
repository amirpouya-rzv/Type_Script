import { useAppSelector } from '@/redux/ui_management/reduxHook';
import { togleThem } from '@/redux/ui_management/uiManagement';
import { BsMoonStars } from 'react-icons/bs';
import { CiSun } from 'react-icons/ci';
import { useDispatch } from 'react-redux';





const Them = () => {
    
    const { them } = useAppSelector((state) => state.uiManagerReducer);
    const dispatch = useDispatch();
    return (
   <div className="inline-block">
  <button
    type="button"
    onClick={() => dispatch(togleThem())}
    className="transition-transform duration-300 hover:rotate-12 active:rotate-180 fixed left-16"
  >
    {them === "light" ? (
      <BsMoonStars size={18} className="text-gray-400 cursor-pointer" />
    ) : (
      <CiSun size={18} className="text-yellow-400 cursor-pointer " />
    )}
  </button>
</div>
    );
};

export default Them;