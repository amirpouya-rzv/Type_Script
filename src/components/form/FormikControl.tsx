
import Checkbox from "./Checkbox";
import Date from "./Date";
import FileUpload from "./File";
import Input from "./Input";
import MultiSelect from "./MultiSelect";
import Radio from "./Radio";
import SearchableSelect from "./SearchableSelect";
import Select from "./Select";
import Switch from "./Switch";
import Textarea from "./Textarea";


type ControlType =
  | "input"
  | "textarea"
  | "select"
  | "radio"
  | "checkbox"
  | "file"
  | "switch"
  | "datae"
  | "multiSelect"
  | "searchableSelect";

interface FormikControlProps {
  control: ControlType;
  [key: string]: unknown;
}

function FormikControl({ control, ...rest }: FormikControlProps) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "file":
      return <FileUpload {...rest} />;
    case "switch":
      return <Switch {...rest} />;
    case "datae":
      return <Date {...rest} />;
    case "multiSelect":
      return <MultiSelect {...rest} />;
    case "searchableSelect":
      return <SearchableSelect {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;