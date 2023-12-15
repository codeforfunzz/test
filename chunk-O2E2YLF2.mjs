import { b } from './chunk-SKD47WU3.mjs';
import * as e from 'react';
import { jsx } from 'react/jsx-runtime';

var a=(t=>(t.click="click",t.input="input",t.view="view",t))(a||{}),i=e.createContext(null),p=e.memo(({sendTrack:r,children:c})=>{let s=e.useMemo(()=>({sendTrack:r}),[r]);return jsx(i.Provider,{value:s,children:jsx(b,{children:c})})});p.displayName="DesignSystemProvider";function u(){return e.useContext(i)}

export { a, p as b, u as c };
