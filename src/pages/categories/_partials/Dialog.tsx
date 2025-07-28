import AppButton from '@/components/shared/AppButton';
import AppInput from '@/components/shared/AppInput';
import { addCategoriesServices } from '@/services/CategoriesServiceis';
import { AddCategoriesType } from '@/types/taskCategories';
import { successToast } from '../../../utils/toastUtils';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';

export default function FooterDemo() {

    const initialvalues = {
        title: "",
        description: "",
        createdAt: new Date().toDateString(),
        userId: "1",
    }

    const [open, setOpen] = useState(false);
    // const [categories, setCategories] = useState<AddCategoriesType[]>([])
    const [values, setValues] = useState<AddCategoriesType>(initialvalues)

    const handleaddcategoris = async () => {
        const res = await addCategoriesServices(values);
        if (res.status === 201) {
            successToast();
            setValues(res.data);
            setOpen(false);
            setValues(initialvalues)
        }
    }

    return (
        <div className="card flex justify-content-center">
            <Button
                className="bg-indigo-700 hover:bg-indigo-800 rounded-full text-white py-1 pb-2 shadow-2xl px-5 flex justify-center items-center mb-5"
                label="+"
                onClick={() => setOpen(true)}
            />
            <Dialog
                header="افزودن دسته‌بندی"
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
                        <AppButton type="submit" title="ثبت دسته‌بندی" />
                    </div>
                </form>
            </Dialog>
        </div>
    )
}
