import { css } from "styled-components";

export const laptop = (props) => {
  return css`
    @media only screen and (max-width:1024px){
    ${props}
    `;
};
export const tablet = (props) => {
  return css`
    @media only screen and (max-width:768px){
    ${props}
    `;
};
export const lMobile = (props) => {
  return css`
    @media only screen and (max-width:425px){
    ${props}
    `;
};
export const onlyForMenuPage = (props) => {
  return css`
    @media only screen and (max-width:470px){
    ${props}
    `;
};
export const mMobile = (props) => {
  return css`
    @media only screen and (max-width:375px){
    ${props}
    `;
};
export const sMobile = (props) => {
  return css`
    @media only screen and (max-width:320px){
    ${props}
    `;
};
export const glaxayFold = (props) => {
  return css`
    @media only screen and (max-width:280px){
    ${props}
    `;
};