import { c } from './chunk-O2E2YLF2.mjs';
import { a } from './chunk-KR2WOWIH.mjs';
import * as d from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { jsxs, jsx } from 'react/jsx-runtime';

var L=({className:e})=>jsxs("div",{className:a("lds-spinner",e),children:[jsx("div",{}),jsx("div",{}),jsx("div",{}),jsx("div",{}),jsx("div",{}),jsx("div",{}),jsx("div",{}),jsx("div",{}),jsx("div",{}),jsx("div",{}),jsx("div",{}),jsx("div",{})]}),k=cva(["ui-flex ui-items-center ui-space-x-2 ui-justify-center ui-rounded-sm ui-font-medium ui-text-base ui-leading-5 ui-transition-colors disabled:ui-pointer-events-none disabled:ui-bg-om-ink-200 disabled:ui-text-om-ink-300"],{variants:{status:{primary:"ui-bg-om-blue-500 ui-text-om-white-500 hover:ui-bg-blue-600 active:ui-bg-om-blue-600",destruction:"ui-bg-om-red-200 ui-text-om-red-500 hover:ui-bg-om-red-300 active:ui-bg-om-red-300",secondary:"ui-bg-om-white-500 ui-border ui-border-om-blue-500 ui-text-om-blue-500 hover:ui-bg-[rgba(214,234,255,0.4)] active:ui-bg-om-blue-200",plain:"ui-text-om-blue-500","primary-notice":"ui-bg-om-green-500 ui-text-om-white-500 hover:ui-bg-om-green-600 hover:text-accent-foreground"},size:{normal:"ui-h-[48px] ui-px-8 ui-min-w-[128px]",small:"ui-h-10 ui-rounded-md ui-px-3 ui-min-w-[128px]",compact:"ui-h-8 ui-rounded-md ui-px-8 min-w-[80px] ui-text-[14px]"}},defaultVariants:{status:"primary",size:"normal"}}),C=d.forwardRef(({className:e,status:r,size:n,disabled:a$1,loading:i,asChild:p=!1,children:P,trackingData:B,trackingIndex:u,trackingName:m,blockSendTracking:w,onClick:s,...R},H)=>{let M=p?Slot:"button",l=!a$1&&!i,{sendTrack:c$1}=c()||{},V=v=>{if(s==null||s(v),!c$1)return;let b=v.target,E=b.innerText||b.textContent,f=m;if(!f)return;let x={};u!=null&&(x.index=u),!w&&c$1(f,"click",{...x,keyword:E,...B,auto_click:!m});};return jsxs(M,{className:a(k({status:r,size:n,className:e}),{"button--ripple":l}),ref:H,"data-pressable":l?"true":"false",onClick:V,...R,children:[i&&jsx(L,{}),jsx("span",{children:P})]})});C.displayName="Button";var G=cva("ui-flex",{variants:{direction:{horizontal:"ui-space-x-3",vertical:"ui-space-y-2"}}}),N=d.forwardRef(({asChild:e,className:r,direction:n="horizontal",...a$1},i)=>jsx(e?Slot:"div",{ref:i,className:a(G({direction:n,className:r})),...a$1}));N.displayName="ButtonGroup";

export { C as a, N as b };
