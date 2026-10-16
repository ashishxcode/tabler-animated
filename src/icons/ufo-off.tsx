"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16.95 9.01c3.02 .739 5.05 2.123 5.05 3.714c0 1.08 -.931 2.063 -2.468 2.814m-3 1c-1.36 .295 -2.9 .462 -4.531 .462c-5.52 0 -10 -1.909 -10 -4.276c0 -1.59 2.04 -2.985 5.07 -3.724"}],["path",{"d":"M14.69 10.686c1.388 -.355 2.31 -.976 2.31 -1.686v-.035c0 -2.742 -2.239 -4.965 -5 -4.965c-1.125 0 -2.164 .37 -3 .992m-1.707 2.297a4.925 4.925 0 0 0 -.293 1.676v.035c0 .961 1.696 1.764 3.956 1.956"}],["path",{"d":"M15 17l2 3"}],["path",{"d":"M8.5 17l-1.5 3"}],["path",{"d":"M12 14h.01"}],["path",{"d":"M7 13h.01"}],["path",{"d":"M17 13h.01"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2,6],"o":[16.01,16.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,13],"a":0.06},{"fx":"pop","n":[1,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,7.48],[7.75,18.5],[12.01,14],[7.01,13]]}];

export const UfoOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UfoOffIcon.displayName = "UfoOffIcon";
