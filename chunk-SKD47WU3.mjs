import { b } from './chunk-KR2WOWIH.mjs';
import * as t from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

var o=t.createContext({}),R=t.memo(({children:r})=>{let[n,l]=t.useState({xl:!1,lg:!1,md:!1,dsm:!1,sm:!1}),d=t.useCallback(s=>{s.isIntersecting?l(e=>({...e,xl:!0})):l(e=>({...e,xl:!1}));},[]),{targetRef:u}=b({threshold:1,callbackFn:d}),b$1=t.useCallback(s=>{s.isIntersecting?l(e=>({...e,lg:!0})):l(e=>({...e,lg:!1}));},[]),{targetRef:m}=b({threshold:1,callbackFn:b$1}),f=t.useCallback(s=>{s.isIntersecting?l(e=>({...e,md:!0})):l(e=>({...e,md:!1}));},[]),{targetRef:p}=b({threshold:1,callbackFn:f}),h=t.useCallback(s=>{s.isIntersecting?l(e=>({...e,dsm:!0})):l(e=>({...e,dsm:!1}));},[]),{targetRef:k}=b({threshold:1,callbackFn:h}),v=t.useCallback(s=>{s.isIntersecting?l(e=>({...e,sm:!0})):l(e=>({...e,sm:!1}));},[]),{targetRef:x}=b({threshold:1,callbackFn:v});return jsxs(o.Provider,{value:n,children:[jsxs("div",{className:"ui-fixed ui-z-max ui-left-0 ui-flex ui-flex-col ui-top-1/2",children:[jsx("div",{className:"ui-hidden om-xl:ui-block ui-w-[1px] ui-h-[1px]",ref:u}),jsx("div",{className:"ui-hidden om-lg:ui-block om-xl:ui-hidden ui-w-[1px] ui-h-[1px]",ref:m}),jsx("div",{className:"ui-hidden om-md:ui-block om-lg:ui-hidden ui-w-[1px] ui-h-[1px]",ref:p}),jsx("div",{className:"ui-hidden om-dsm:ui-block om-md:ui-hidden ui-w-[1px] ui-h-[1px]",ref:k}),jsx("div",{className:"ui-block om-dsm:ui-hidden ui-w-[1px] ui-h-[1px]",ref:x})]}),r]})});R.displayName="ScreenSizeWatcher";function S(){return t.useContext(o)}

export { o as a, R as b, S as c };
