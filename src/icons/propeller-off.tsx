"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10.448 10.432a3 3 0 1 0 4.106 4.143"}],["path",{"d":"M14.272 10.272c.66 -1.459 1.058 -2.888 1.198 -4.286c.22 -1.63 -.762 -2.986 -3.47 -2.986c-1.94 0 -3 .696 -3.355 1.69m.697 4.653c.145 .384 .309 .77 .491 1.157"}],["path",{"d":"M13.169 16.751c.97 1.395 2.057 2.523 3.257 3.386c1.02 .789 2.265 .853 3.408 -.288m1.479 -2.493c.492 -1.634 -.19 -2.726 -1.416 -3.229c-.82 -.37 -1.703 -.654 -2.65 -.852"}],["path",{"d":"M8.664 13c-1.693 .143 -3.213 .52 -4.56 1.128c-1.522 .623 -2.206 2.153 -.852 4.498s3.02 2.517 4.321 1.512c1.2 -.863 2.287 -1.991 3.258 -3.386"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.78,13.22],[12.07,6.75],[17.32,17],[6.68,16.86]]}];

export const PropellerOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PropellerOffIcon.displayName = "PropellerOffIcon";
