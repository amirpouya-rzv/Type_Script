import AppButton from '@/components/shared/AppButton';
import AppInput from '@/components/shared/AppInput';
import { addCategoriesServices, updateCategoriesServices } from '@/services/CategoriesServiceis';
import { AddCategoriesType } from '@/types/taskCategories';
import { successToast } from '../../../utils/toastUtils';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useEffect, useState } from 'react';
import Categories from '../Categories';


const initialvalues = {
    title: "",
    description: "",
    createdAt: new Date().toDateString(),
    userId: "1",
}

type ModalDilogType = {
    open: boolean,
    setOpen: (value: boolean) => void
    selectedItem?: AddCategoriesType
    setSelectedItem: Dispatch<SetStateAction<AddCategoriesType | undefined>>
}

export default function FooterDemo(
    { open,
        setOpen,
        selectedItem,
        setSelectedItem
    }:
        ModalDilogType) {


    const [values, setValues] = useState<AddCategoriesType>(initialvalues)

    const handleaddcategoris = async () => {
        let res;
        if (selectedItem) {
            res = await updateCategoriesServices(selectedItem.id, values);
        } else {
            res = await addCategoriesServices(values);
        }

        if (res?.status === 200 || res?.status === 201) {
            successToast(selectedItem ? "دسته‌بندی با موفقیت ویرایش شد" : "دسته‌بندی با موفقیت اضافه شد");
            setOpen(false);
            setSelectedItem(undefined);
            setValues(initialvalues);
        }
    };



    useEffect(() => {
        setValues(selectedItem || initialvalues)
    }, [selectedItem])

    return (
        <div className="card flex justify-content-center">
            <Button
                className="bg-indigo-700 hover:bg-indigo-800 rounded-full text-white py-1 pb-2 shadow-2xl px-5 flex justify-center items-center mb-5"
                label="+"
                onClick={() => {
                    setOpen(true)
                    setSelectedItem(undefined)
                }}
            />
            <Dialog
                header={selectedItem ? "ویرایش دسته‌بندی" : "افزودن دسته‌بندی"}
                visible={open}
                className='w-11/12 md:w-6/12 lg:w-4/12'
                onHide={() => setOpen(false)}
            >
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleaddcategoris();
                    }}
                    className="max-w-md mx-auto mt-5"
                >
                    <AppInput
                        title="عنوان"
                        placeholder="عنوان"
                        value={values.title}
                        onChange={(e) => setValues({ ...values, title: e.target.value })}
                        required
                        id="title"
                    />
                    <AppInput
                        title="توضیحات"
                        placeholder="توضیحات"
                        value={values.description}
                        onChange={(e) => setValues({ ...values, description: e.target.value })}
                    />

                    <div className="flex justify-center gap-2 mt-5">
                        <AppButton type="submit" title="ثبت" />
                    </div>
                </form>
            </Dialog>
        </div>
    )
}
