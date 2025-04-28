import { SetStateAction, useState } from "react";

export interface TextAreaProps {
  name: string;
  placeholder?: string;
  valueCallback: React.Dispatch<SetStateAction<string>>;
}

export const TextArea = ({
  name,
  placeholder,
  valueCallback,
}: TextAreaProps) => {
  const [value, setValue] = useState<string>("");
  return (
    <textarea
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={({ target }) => setValue(target.value)}
      onBlur={() => valueCallback(value)}
    ></textarea>
  );
};
