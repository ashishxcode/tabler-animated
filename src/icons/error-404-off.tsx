"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 8v3a1 1 0 0 0 1 1h3"}],["path",{"d":"M7 8v8"}],["path",{"d":"M17 8v3a1 1 0 0 0 1 1h3"}],["path",{"d":"M21 8v8"}],["path",{"d":"M10 10v4a2 2 0 1 0 4 0m0 -4a2 2 0 0 0 -2 -2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,10],[7,12],[19,10],[21,12],[12,12]]}];

export const Error404OffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Error404OffIcon.displayName = "Error404OffIcon";
