import styled, { css } from "styled-components";

export default styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  ${({ color }) =>
    color === "danger" &&
    css`
      background-color: var(--secondary-color);
    `};

  ${({ color }) =>
    color === "success" &&
    css`
      background-color: var(--primary-success-color);
    `};

  &:hover {
    color: black;
    ${({ color }) =>
      color === "danger" &&
      css`
        background-color: var(--secondary-background);
      `};

    ${({ color }) =>
      color === "success" &&
      css`
        background-color: var(--primary-success-background);
      `};
  }
`;
