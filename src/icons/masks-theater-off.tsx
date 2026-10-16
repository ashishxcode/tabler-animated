"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 9c.058 0 .133 0 .192 0h6.616a2 2 0 0 1 1.992 2.183l-.554 6.041m-1.286 2.718a3.99 3.99 0 0 1 -2.71 1.058h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182"}],["path",{"d":"M18 13h.01"}],["path",{"d":"M15 16.5c.657 .438 1.313 .588 1.97 .451"}],["path",{"d":"M8.632 15.982a4.05 4.05 0 0 1 -.382 .018h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182a2 2 0 0 1 .514 -1.531a1.99 1.99 0 0 1 1.286 -.652m4 0h2.808a2 2 0 0 1 2 2"}],["path",{"d":"M6 8h.01"}],["path",{"d":"M6 12c.764 -.51 1.528 -.63 2.291 -.36"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1,2],"o":[16.51,15],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[16.5,15],[7.5,10],[6.01,8],[7.15,11.75]]}];

export const MasksTheaterOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MasksTheaterOffIcon.displayName = "MasksTheaterOffIcon";
