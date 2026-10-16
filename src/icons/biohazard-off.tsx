"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10.586 10.586a2 2 0 1 0 2.836 2.82"}],["path",{"d":"M11.939 14c0 .173 .048 .351 .056 .533v.217a4.75 4.75 0 0 1 -4.533 4.745h-.217"}],["path",{"d":"M2.495 14.745a4.75 4.75 0 0 1 7.737 -3.693"}],["path",{"d":"M16.745 19.495a4.75 4.75 0 0 1 -4.69 -5.503h-.06"}],["path",{"d":"M14.533 10.538a4.75 4.75 0 0 1 6.957 3.987v.217"}],["path",{"d":"M10.295 10.929a4.75 4.75 0 0 1 -2.988 -3.64m.66 -3.324a4.75 4.75 0 0 1 .5 -.66l.164 -.172"}],["path",{"d":"M15.349 3.133a4.75 4.75 0 0 1 -.836 7.385"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[14.37,16.74],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.7,12.3],[9.62,16.75],[6.36,12.37],[18.01,12.37],[8.8,7.03],[15.63,6.83]]}];

export const BiohazardOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BiohazardOffIcon.displayName = "BiohazardOffIcon";
