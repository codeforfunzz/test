import { a } from './chunk-KR2WOWIH.mjs';
import * as c from 'react';
import * as r from '@radix-ui/react-scroll-area';
import { jsxs, jsx } from 'react/jsx-runtime';

var u=c.forwardRef(({className:i,children:e,...o},a$1)=>jsxs(r.Root,{ref:a$1,className:a("ui-relative ui-overflow-hidden",i),...o,children:[jsx(r.Viewport,{className:"ui-h-full ui-w-full ui-rounded-[inherit]",children:e}),jsx(m,{}),jsx(r.Corner,{})]}));u.displayName=r.Root.displayName;var m=c.forwardRef(({className:i,orientation:e="vertical",...o},a$1)=>jsx(r.ScrollAreaScrollbar,{ref:a$1,orientation:e,className:a("ui-flex ui-touch-none ui-select-none ui-transition-colors",e==="vertical"&&"ui-h-full ui-w-2.5 ui-p-[1px]",e==="horizontal"&&"ui-h-2.5 ui-border-t ui-border-t-transparent ui-p-[1px]",i),...o,children:jsx(r.ScrollAreaThumb,{className:"ui-relative ui-flex-1 ui-rounded-full ui-bg-om-ink-300s hover:ui-bg-om-ink-400s"})}));m.displayName=r.ScrollAreaScrollbar.displayName;

export { u as a, m as b };
