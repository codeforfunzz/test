import { a } from './chunk-KR2WOWIH.mjs';
import * as n from 'react';
import * as e from '@radix-ui/react-slider';
import { jsxs, jsx } from 'react/jsx-runtime';

var b=n.forwardRef(({numberDot:l=1,wrapperClassName:a$1,className:o,sliderName:m,children:s,...i},c)=>{var d;return jsxs("div",{className:a("flex flex-col",a$1),children:[jsxs(e.Root,{ref:c,className:a("ui-relative ui-flex ui-w-full ui-touch-none ui-select-none ui-items-center",o),...i,children:[jsx(e.Track,{className:"ui-relative ui-h-2 ui-w-full ui-grow ui-overflow-hidden ui-rounded-full ui-bg-om-ink-100s",children:jsx(e.Range,{className:a(" ui-absolute ui-h-full ui-bg-om-blue-500",{"ui-bg-om-ink-200s":i==null?void 0:i.disabled})})}),(d=Array.from(Array(l).keys()))==null?void 0:d.map(f=>jsx(e.Thumb,{className:a("ui-block ui-h-6 ui-w-6 ui-rounded-full ui-border-4 ui-border-om-blue-500 ui-bg-background ui-ring-offset-om-blue-500 disabled:ui-pointer-events-none disabled:ui-opacity-50",{"hover:ui-outline-none hover:ui-ring-4 hover:ui-ring-[#094bf433] focus-visible:ui-outline-none active:ui-ring-4 active:ui-ring-[#094bf466]":!(i!=null&&i.disabled),"ui-border-om-ink-200 ui-bg-om-ink-50s":i==null?void 0:i.disabled})},`${m}-${f}`))]}),s]})});b.displayName=e.Root.displayName;var v=n.forwardRef(({minUnit:l,maxUnit:a},o)=>jsxs("div",{className:"ui-py-[6px]",ref:o,children:[jsx("span",{className:" ui-text-om-t14 ui-text-om-ink-500s",children:l}),jsx("span",{className:"ui-text-om-t14 ui-text-om-ink-500s ui-float-right",children:a})]}));v.displayName="SliderUnit";

export { b as a, v as b };
