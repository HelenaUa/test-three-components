import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: "250px";
`;

export const StyledInput = styled.input<{ hasClear?: boolean }>`
  padding: 8px 12px;
  padding-right: ${(p) => (p.hasClear ? "32px" : "12px")};
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  width: 200px;

  &:focus {
    border-color: #0070f3;
  }
`;

export const IconButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;