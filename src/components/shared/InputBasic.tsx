import { Input } from "@/components/ui/input";
import { FieldLabel } from "../ui/field";
import { cn } from "@/lib/utils";

type InputBasicProps = {
  value: string;
  placeholder: string;
  label?: string;
  onChange?: (v: string) => void;
  className?: string;
};

export function InputBasic({
  value,
  placeholder,
  label,
  onChange,
  className,
}: InputBasicProps) {
  return (
    <div className="space-y-2">
      {label && <FieldLabel>{label}</FieldLabel>}

      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          "border-gray-300 dark:placeholder:text-white",
          className
        )}
      />
    </div>
  );
}