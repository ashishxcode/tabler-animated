"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -8"}],["path",{"d":"M6 7l0 .01"}],["path",{"d":"M10 7l0 .01"}],["path",{"d":"M14 7l0 .01"}],["path",{"d":"M18 7l0 .01"}],["path",{"d":"M6 11l0 .01"}],["path",{"d":"M18 11l0 .01"}],["path",{"d":"M10 11l4 0"}],["path",{"d":"M10 19l2 2l2 -2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,9],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,8],"a":0.22,"dl":0.1,"st":0.07,"os":[[6,7.01],[10,7.01],[14,7.01],[18,7.01],[6,11.01],[18,11.01],[12,11],[12,20]]}];

export const KeyboardShowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
KeyboardShowIcon.displayName = "KeyboardShowIcon";
