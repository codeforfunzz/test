import { a as a$1 } from './chunk-HA5TRLY5.mjs';
import { a } from './chunk-KR2WOWIH.mjs';
import * as r from 'react';
import * as e from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import { X } from 'lucide-react';
import { jsx, jsxs } from 'react/jsx-runtime';

var T=e.Root,w=e.Trigger,H=e.Close,d=({className:t,...i})=>jsx(e.Portal,{className:a(t),...i});d.displayName=e.Portal.displayName;var f=r.forwardRef(({className:t,...i},o)=>jsx(e.Overlay,{className:a("ui-fixed ui-inset-0 ui-z-max ui-bg-om-ink-400 data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-fade-in-0",t),...i,ref:o}));f.displayName=e.Overlay.displayName;var v=cva("ui-fixed ui-z-max ui-flex ui-flex-col ui-min-h-[30dvh] ui-max-h-[calc(100dvh-24px)] ui-bg-background ui-shadow-lg ui-rounded-tr-xl ui-rounded-tl-xl ui-transition ui-ease-in-out data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-duration-300 data-[state=open]:ui-duration-500",{variants:{side:{top:"ui-inset-x-0 ui-top-0 data-[state=closed]:ui-slide-out-to-top data-[state=open]:ui-slide-in-from-top",bottom:"ui-inset-x-0 ui-bottom-0 data-[state=closed]:ui-slide-out-to-bottom data-[state=open]:ui-slide-in-from-bottom",left:"ui-inset-y-0 ui-left-0 ui-h-full ui-w-3/4 data-[state=closed]:ui-slide-out-to-left data-[state=open]:ui-slide-in-from-left om-sm:ui-max-w-sm",right:"ui-inset-y-0 ui-right-0 ui-h-full ui-w-3/4 data-[state=closed]:ui-slide-out-to-right data-[state=open]:ui-slide-in-from-right om-sm:ui-max-w-sm"}},defaultVariants:{side:"right"}}),S=r.forwardRef(({side:t="bottom",className:i,children:o,...n},u)=>jsxs(d,{children:[jsx(f,{}),jsx(e.Content,{ref:u,className:a(v({side:t}),i),...n,children:o})]}));S.displayName="SheetBody";var y=({className:t,children:i,...o})=>jsxs("div",{className:a("ui-flex ui-justify-center ui-px-2 ui-py-4 ui-border-b ui-border-om-ink-200s ui-flex-shrink-0",t),...o,children:[i,jsxs(e.Close,{className:"ui-absolute ui-right-2 ui-top-4 ui-rounded-sm ui-opacity-70 ui-ring-offset-background ui-transition-opacity hover:ui-opacity-100 focus:ui-outline-none focus:ui-ring-2 focus:ui-ring-ring focus:ui-ring-offset-2 disabled:ui-pointer-events-none data-[state=open]:ui-bg-secondary",children:[jsx(X,{className:"ui-h-6 ui-w-6"}),jsx("span",{className:"ui-sr-only",children:"Close"})]})]});y.displayName="SheetHeader";var P=r.forwardRef(({className:t,children:i,...o},n)=>jsx(a$1,{ref:n,className:a("ui-flex-1 ui-overflow-hidden",t),...o,children:({width:u,height:p})=>jsx("div",{style:{width:u,height:p},children:i})}));P.displayName="SheetContent";var x=({className:t,...i})=>jsx("div",{className:a("ui-border-t ui-border-om-ink-100s ui-p-4 ui-flex-shrink-0 ui-space-x-3",t),...i});x.displayName="SheetFooter";var R=r.forwardRef(({className:t,...i},o)=>jsx(e.Title,{ref:o,className:a("ui-text-lg ui-font-medium ui-leading-[26px] ui-text-om-ink-500s",t),...i}));R.displayName=e.Title.displayName;

export { T as a, w as b, H as c, S as d, y as e, P as f, x as g, R as h };