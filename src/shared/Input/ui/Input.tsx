import { SetStateAction, useState } from "react";

export interface InputProps {
  type?: string;
  placeholder?: string;
  valueCallback: React.Dispatch<SetStateAction<string>>;
}

export const Input = ({
  type = "text",
  placeholder,
  valueCallback,
}: InputProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={({ target }) => setInputValue(target.value)}
      onBlur={() => valueCallback(inputValue)}
    />
  );
};
