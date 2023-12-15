import { a } from './chunk-KR2WOWIH.mjs';
import * as r from 'react';
import { cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { jsx } from 'react/jsx-runtime';

var u=cva(["ui-flex ui-items-center ui-text-base ui-text-om-ink-500 ui-bg-background hover:ui-bg-om-ink-50s","data-[activated=true]:ui-bg-om-blue-100","data-[disabled=true]:ui-cursor-not-allowed data-[disabled=true]:ui-text-om-ink-300s"],{variants:{size:{normal:"ui-py-3 ui-px-3",large:"ui-py-4 ui-px-4"}},defaultVariants:{size:"normal"}}),c=r.forwardRef(({className:t,size:e,asChild:a$1,disabled:i,activated:o,...l},d)=>jsx(a$1?Slot:"div",{role:"listitem",className:a(u({size:e,className:t})),ref:d,"data-disabled":i?"true":"false","data-activated":o?"true":"false",...l}));c.displayName="ListItem";var f=r.forwardRef(({className:t,children:e,asChild:a$1,...i},o)=>jsx(a$1?Slot:"div",{ref:o,role:"list",className:a(t),...i,children:e}));f.displayName="List";

export { c as a, f as b };
