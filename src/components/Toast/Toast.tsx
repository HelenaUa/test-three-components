import { useEffect } from "react";
import { ToastWrapper } from "./Toast.styled";


type ToastProps = {
  type: "success" | "error" | "info" | "warning";
  message: string;
  duration?: number;
  onClose: () => void;
};

export const Toast = ({ type, message, duration = 3000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, []);

  return <ToastWrapper toastType={type}>{message}</ToastWrapper>;
};
