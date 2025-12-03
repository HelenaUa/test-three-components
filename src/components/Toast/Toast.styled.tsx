import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(20px); }
`;

type WrapperProps = {
  toastType: "success" | "error" | "info" | "warning";
};

export const ToastWrapper = styled.div<WrapperProps>`
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  margin-bottom: 10px;
  font-size: 14px;

  background-color: ${({ toastType }) =>
    toastType === "success"
      ? "#4caf50"
      : toastType === "error"
      ? "#f44336"
      : toastType === "warning"
      ? "#ff9800"
      : "#2196f3"};
`;

export const ToastContainerWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
`;
