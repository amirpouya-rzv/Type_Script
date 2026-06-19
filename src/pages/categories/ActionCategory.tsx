import { addCategories, getCategories } from "@/services/category";
import { CategoryType, SendCategoryType } from "@/types/CategoryType";
import { errorToast, successToast } from "@/utils/toastUtils";
import { useEffect, useState } from "react";
import CategoriTable from "./CategoryTable";
import { DialogDemo } from "@/components/shared/Diloag";
import { Form, Formik } from "formik";
import FormikControl from "@/components/form/FormikControl";
import { initialValues, validationSchema } from "./core";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

const ActionCategory = () => {
  const [data, setData] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState<boolean>(false);
  const [open, setOpen] = useState(false); 

  /////////////// get categoris /////////////
  const handelgetcategorylist = async () => {
    try {
      setLoading(true);
      const res = await getCategories();
      if (res.status == 200) {
        setData(res.data.data);
      } else {
        errorToast(res.data.message);
      }
    } catch (error) {
      errorToast("خطا در دریافت اطلاعات");
    } finally {
      setLoading(false);
    }
  };

  //////////////// get parent-data //////////////
  const [parents, setParents] = useState<CategoryType[]>([]);
  const handleGetParentCategoris = async () => {
    try {
      const res = await getCategories();
      if (res.status == 200) {
        const allparent = res.data.data;
        setParents(
          allparent.map((p) => {
            return { id: p.id, value: p.title };
          }),
        );
      }
    } catch (err) {
      errorToast(err.message | "حطا در دریافت اطلاعاتدسته والد");
    }
  };

///////////// submit session //////////////////////

  const onSubmit = async (values: SendCategoryType, actions: any) => {
    try {
      values = {
        ...values,
        is_active: values.is_active ? 1 : 0,
        show_in_menu: values.show_in_menu ? 1 : 0,
      };
      const res = await addCategories(values);
      if (res.status == 201) {
        setFlag(!flag);
        successToast(res.data.message ?? "دسته‌بندی با موفقیت ثبت شد");
        actions.resetForm();
        setOpen(false); 
      }
    } catch (error) {
      errorToast(error?.message);
    }
  };


/////   get parent and categoris ///////////
  useEffect(() => {
    handleGetParentCategoris();
    handelgetcategorylist();
  }, [flag]);


  ////////////////// dilog form /////////////////
  const categoryDialog = (
    <DialogDemo
      open={open} // ✅ اضافه شد
      onOpenChange={setOpen} 
      textbutton="افزودن دسته بندی"
      title="دسته بندی جدید"
      button="ثبت"
      contentClassName="w-xl"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <div className="w-">
              {parents.length > 0 ? (
                <FormikControl
                  control="select"
                  name="parent_id"
                  label="دسته‌بندی والد"
                  options={parents}
                />
              ) : null}

              <FormikControl
                control="input"
                name="title"
                label="عنوان"
                placeholder="عنوان دسته‌بندی را وارد کنید"
              />

              <FormikControl
                control="textarea"
                name="descriptions"
                label="توضیحات"
                placeholder="توضیحات دسته‌بندی را وارد کنید"
              />
              <FormikControl
                control="switch"
                name="show_in_menu"
                label="نمایش در منو"
              />
              <FormikControl control="file" name="image" label="تصویر" />

              <div className="flex justify-end items-center gap-2">
                <DialogClose asChild>
                  <Button
                    variant="outline"
                    className="mt-10 bg-rose-600 text-white border hover:bg-rose-700 hover:text-white"
                  >
                    بستن
                  </Button>
                </DialogClose>
                <Button variant="default" type="submit" className="mt-10 ">
                  ثبت دسته‌بندی
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </DialogDemo>
  );



  ///// delet ////

  

  return (
    <CategoriTable
      data={data}
      loading={loading}
      handelgetcategorylist={handelgetcategorylist}
      categoryDialog={categoryDialog}
    />
  );
};

export default ActionCategory;
