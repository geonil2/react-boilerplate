import { css, keyframes } from "@emotion/react";

export const COLORS = {
  white: "#FFFFFF",
};

export const ANIMATIONS = {
  fadeIn: keyframes`0% { opacity: 0; } 100% { opacity: 1; }`,
  fadeOut: keyframes`0% { opacity: 1; } 100% { opacity: 0; }`,
  fadeOutIn: keyframes`0% { opacity: 1;} 50% { opacity: 0;} 100% { opacity: 1 }`,
  bounceDown: keyframes`0% { transform: translateY(0) } 50% { transform: translateY(8px) } 100% { transform: translateY(0) }`,
};

export const media = {
  desktop: "@media only screen and (min-width: 1201px)",
  tablet: "@media only screen and (max-width: 1200px)",
  mobile: "@media only screen and (max-width: 768px)",
};

export const selectStyles = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* background: transparent url("/images/icons/select-down.svg") no-repeat; */
  background-position-x: 100%;
  background-color: #fff;
`;
