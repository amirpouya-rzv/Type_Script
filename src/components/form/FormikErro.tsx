import { ReactNode } from "react";


const FormikErro = ({Children} : {Children : ReactNode}) => {
    return (
        <div>
            <small>{Children}</small>
        </div>
    );
};

export default FormikErro;