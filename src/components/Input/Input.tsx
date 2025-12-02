import React, { useState } from "react";

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
    <div style={{ position: "relative", width: "250px" }}>
      <input
        type={inputType}
        value={currentValue}
        placeholder={placeholder}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "8px 0 8px 10px",
          fontSize: "14px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />

      {/* Очко-іконка */}
      {isPassword && (
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          style={{
            position: "absolute",
            right: clearable ? 28 : 10,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          {showPassword ? "🙈" : "👁️"}
        </span>
      )}

      {/* Clear button */}
      {clearable && currentValue && (
        <span
          onClick={clearInput}
          style={{
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            color: "#888",
          }}
        >
          ✖
        </span>
      )}
    </div>
  );
};