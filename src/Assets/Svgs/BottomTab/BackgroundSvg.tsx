import { screenWidth } from '@/Theme';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function BackgroundSvg({ style }: { style?: StyleProp<ViewStyle> }) {
  const pathSvg = `<svg width=${screenWidth} height="96" viewBox="0 0 390 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_4498_39365)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M195 42C208.535 42 220.107 33.5973 224.784 21.724C227.213 15.5579 232.373 10 239 10H390C396.627 10 402 15.3726 402 22V84C402 90.6274 396.627 96 390 96H-2.86102e-06C-6.62742 96 -12 90.6274 -12 84V22C-12 15.3726 -6.62742 10 0 10H151C157.627 10 162.787 15.5579 165.216 21.724C169.893 33.5973 181.465 42 195 42Z" fill="white"/>
        </g>
        <defs>
        <filter id="filter0_d_4498_39365" x="-20" y="0" width="430" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-2"/>
        <feGaussianBlur stdDeviation="4"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.671351 0 0 0 0 0.79222 0 0 0 0 0.46258 0 0 0 0.08 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4498_39365"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4498_39365" result="shape"/>
        </filter>
        </defs>
        </svg>
    `;
  return <SvgXml style={style} xml={pathSvg} />;
}
