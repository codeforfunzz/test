import { c, a } from './chunk-KR2WOWIH.mjs';
import * as e from 'react';
import { mergeRefs } from 'react-merge-refs';
import { jsx } from 'react/jsx-runtime';

var h=e.forwardRef(({children:s,className:r,...o},c$1)=>{let[a$1,n]=e.useState({}),l=e.useCallback(m=>{for(let z of m){let{width:R,height:p}=z.contentRect;n({width:R,height:p});}},[]),f=c({callbackFn:l});return jsx("div",{ref:mergeRefs([c$1,f]),className:a("ui-h-full ui-w-full",r),...o,children:s(a$1)})});h.displayName="BoxSizes";

export { h as a };
