import React, { useState } from "react";
import { Wrapper, StyledInput, IconButton } from "./Input.styled";

interface InputProps {
  type?: "text" | "password" | "number";
  value?: string;
  placeholder?: string;
  clearable?: boolean;
  onChange?: (value: string) => void;
}

export const Input = ({
  type = "text",
  value = "",
  placeholder,
  clearable,
  onChange,
}: InputProps) => {
  const [internalValue, setInternalValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const currentValue = onChange ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange ? onChange(e.target.value) : setInternalValue(e.target.value);
  };

  const clearInput = () => {
    onChange ? onChange("") : setInternalValue("");
  };

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <Wrapper>
      <StyledInput
        type={inputType}
        value={currentValue}
        placeholder={placeholder}
        onChange={handleChange}  
      />

      {/* Eye button */}
      {isPassword && (
        <IconButton onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? "🙈" : "👁️"}
        </IconButton>
      )}

      {/* Clear button */}
      {clearable && currentValue && (
        <IconButton onClick={clearInput}>
          ✖
        </IconButton>
      )}
    </Wrapper>
  );
};

