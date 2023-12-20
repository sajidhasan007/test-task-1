import { FC, ChangeEvent, ReactNode } from "react";
import { Controller } from "react-hook-form";
import { Input } from "antd";

type InputEvent = ChangeEvent<HTMLInputElement>;

interface SearchControlProps {
  name: string;
  control: any;
  errors?: any;
  defaultValue?: string;
  disabled?: boolean;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
  msg?: string;
  size?: "small" | "middle" | "large";
  toUpper?: boolean;
  maxLength?: number;
  number?: boolean;
  isGoNextField?: boolean;
  prefix?: any;
  suffix?: ReactNode;
  allowClear?: boolean;
  onChangeField?: () => void;
}
export const SearchControl: FC<SearchControlProps> = ({
  name,
  control,
  errors,
  msg,
  disabled = false,
  placeholder = "",
  autoComplete = "",
  className = "",
  size = "middle",
  defaultValue = "",
  toUpper = false,
  onChangeField,
  maxLength = 999999,
  isGoNextField = false,
  prefix = "",
  suffix,
  allowClear = true,
  number = false,
}) => {
  const onInputChange = (e: InputEvent) => {
    if (isGoNextField) {
      const nextElementSibling = e.target
        .nextElementSibling as HTMLInputElement | null;
      if (
        (parseInt(e.target.value) || parseInt(e.target.value) === 0) &&
        nextElementSibling
      ) {
        nextElementSibling.focus();
      }
    }
    if (number) {
      e.target.value =
        parseInt(e.target.value) || parseInt(e.target.value) === 0
          ? e.target.value
          : "";
    } else {
      e.target.value = toUpper ? e.target.value.toUpperCase() : e.target.value;
    }
    onChangeField && onChangeField();
  };

  const errMsg = msg ? msg : errors?.[name]?.message;

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            allowClear={allowClear}
            {...field}
            type={"search"}
            id={name}
            className={`py-2    ${className} `}
            size={size}
            disabled={disabled}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onInput={onInputChange}
            autoComplete={autoComplete}
            maxLength={maxLength}
            // prefix={<BiSearch />}
            suffix={suffix}
          />
        )}
      />
      {errMsg && <p className="text-red-600 text-xs">{errMsg}</p>}
    </>
  );
};
