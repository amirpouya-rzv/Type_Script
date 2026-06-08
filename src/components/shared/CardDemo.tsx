import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FastField, Form, Formik } from "formik";

type FieldType = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
};

type Props = {
  title: string;
  description?: string;
  initialValues: Record<string, any>;
  validationSchema?: any;
  onSubmit: (values: any) => void;
  fields: FieldType[];
  submitText?: string;
  secondaryActionText?: string;
  onSecondaryAction?: () => void;
};

export function CardDemo({
  title,
  description,
  initialValues,
  validationSchema,
  onSubmit,
  fields,
  submitText = "Submit",
  secondaryActionText,
  onSecondaryAction,
}: Props) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}

        {secondaryActionText && (
          <CardAction>
            <Button variant="link" onClick={onSecondaryAction}>
              {secondaryActionText}
            </Button>
          </CardAction>
        )}
      </CardHeader>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <CardContent>
            <div className="flex flex-col gap-6">
              {fields.map((field) => (
                <div className="grid gap-2" key={field.name}>
                  <Label htmlFor={field.name}>{field.label}</Label>

                  <FastField
                    id={field.name}
                    name={field.name}
                    type={field.type || "text"}
                    placeholder={field.placeholder}
                    className="border rounded px-3 py-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              {submitText}
            </Button>

            {onSecondaryAction && (
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={onSecondaryAction}
              >
                {secondaryActionText}
              </Button>
            )}
          </CardFooter>
        </Form>
      </Formik>
    </Card>
  );
}