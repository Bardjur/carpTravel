import styled from "@emotion/styled";
import rhomb from "../../assets/imgs/rhomb.svg"
import bgs from "@/helpers/backgroundStyle";
import media from "@/helpers/mediaQuery";
import { TResponsiveImg } from "@/types";

import { SwiperSlide } from 'swiper/react';

type ImageProps = {
  bg: TResponsiveImg
};

export const Slide = styled(SwiperSlide) <ImageProps>`
  ${props => bgs(props.bg.mob)}
  background-repeat: no-repeat;
  background-size: cover;

  ${media.md} {
    ${props => bgs(props.bg.tab)}
  }

  ${media.xl} {
    ${props => bgs(props.bg.desk)}
  }
`;

export const Paginate = styled.div`
  position: absolute;
  width: 194px;
  top: 476px;
  left:20px;
  text-align: left;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;

  & .swiper-pagination-bullet {
    position: relative;
    background: none;
    width: auto;
    height: auto;
    border-radius: 0;
    display: block;
    opacity: 0.50;
    font-size: 20px;
    font-weight: 200;
    text-transform: uppercase; 
    line-height: 17px;
    word-wrap: break-word
  }

  & .swiper-pagination-bullet:not(:last-child) {
    margin-bottom: 16px;
  }

  & .swiper-pagination-bullet-active {
    padding-left: 17px;
    font-weight: 500;
    opacity: 1;

    :before {
      content: url(${rhomb.src});
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      width: 9px;
      height: 9px;
      line-height: 0;
      transform: translateY(-50%);
    }
  }

  & .appeal {
    display: none;
  }

  ${media.md} {
    & {
      width: 221px;
      top: 161px;
      left:auto;
      right: 32px;
    }

    & .swiper-pagination-bullet{
      font-size: 22px;
      line-height: 18px;
    }
  }

  ${media.xl} {
    & {
      width: 254px;
      top: 232px;
      left: 652px;
      right: auto;
    }
    
    & .swiper-pagination-bullet{
      font-size: 28px;
      line-height: 24px;
    }

    & .swiper-pagination-bullet-active .appeal {
      display: inline-block;
      font-size: 12px;
      line-height: 24px;
      font-weight: 200;
      letter-spacing: 2.4px;
      text-transform: none;
      position: absolute;
      width: 290px;
      right: -347px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
