import { Button } from "primereact/button"
import { ComponentProps, useState } from "react"

function AppButton({ title, className, ...rest }: ComponentProps<'button'>) {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Button className={`bg-indigo-700 hover:bg-indigo-800 rounded-full text-white py-1 pb-2 shadow-2xl  px-5 flex justify-center items-center mb-5 ${className}`}
                onClick={() => setVisible(true)} >{title}</Button >
            
        </div>


    )
}

export default AppButton