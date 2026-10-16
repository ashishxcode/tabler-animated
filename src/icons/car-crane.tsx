"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5"}],["path",{"d":"M12 18v-11h3"}],["path",{"d":"M3 17v-5h9"}],["path",{"d":"M4 12v-6l18 -3v2"}],["path",{"d":"M8 12v-4l-4 -2"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5,6],"o":[12.5,11],"d":[2.4,0]}];

export const CarCraneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CarCraneIcon.displayName = "CarCraneIcon";
