import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const slideOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`;

export const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: ${(p) => (p.open ? 1 : 0)};
  pointer-events: ${(p) => (p.open ? "auto" : "none")};
  transition: opacity 0.25s ease;
`;

export const SidebarWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  width: 260px;
  height: 100%;
  background: white;
  padding: 20px;
  animation: ${(p) => (p.open ? slideIn : slideOut)} 0.3s forwards;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
`;

export const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: #f2f2f2;
  }
`;

export const SubMenu = styled.div`
  margin-left: 15px;
  padding-left: 10px;
  border-left: 2px solid #ddd;
`;
