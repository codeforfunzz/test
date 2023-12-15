import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useRef, useCallback, useEffect, useMemo } from 'react';
import T from 'resize-observer-polyfill';

function C(...r){return twMerge(clsx(r))}var I=({callbackFn:r,threshold:e,targetRef:t,rootRef:n})=>{let s=useRef(),u=useRef(),i=useCallback(o=>{let c=o[0];c&&r(c);},[r]);return useEffect(()=>{let o=u.current||(t==null?void 0:t.current);if(!o)return;let c=new IntersectionObserver(i,{root:s.current||(n==null?void 0:n.current),threshold:e});return c.observe(o),()=>{o&&c.unobserve(o);}},[i,n,t,e]),{rootRef:s,targetRef:u}};var V=({callbackFn:r,targetRef:e})=>{let t=useRef(),n=useCallback(s=>{r(s);},[r]);return useEffect(()=>{let s=t.current||(e==null?void 0:e.current);if(!s)return;let u=new T(n);return u.observe(s),()=>{s&&u.unobserve(s);}},[n,e]),t};function j(r){let e=useRef(r);return useEffect(()=>{e.current=r;}),useMemo(()=>(...t)=>{var n;return (n=e.current)==null?void 0:n.call(e,...t)},[])}

export { C as a, I as b, V as c, j as d };
