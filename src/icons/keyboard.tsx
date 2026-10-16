"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -8"}],["path",{"d":"M6 10l0 .01"}],["path",{"d":"M10 10l0 .01"}],["path",{"d":"M14 10l0 .01"}],["path",{"d":"M18 10l0 .01"}],["path",{"d":"M6 14l0 .01"}],["path",{"d":"M18 14l0 .01"}],["path",{"d":"M10 14l4 .01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7],"a":0.22,"dl":0.1,"st":0.07,"os":[[6,10],[10,10],[14,10],[18,10],[6,14.01],[18,14.01],[12,14.01]]}];

export const KeyboardIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
KeyboardIcon.displayName = "KeyboardIcon";
