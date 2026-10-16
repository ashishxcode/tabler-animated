"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6l7 0"}],["path",{"d":"M4 12l7 0"}],["path",{"d":"M4 18l9 0"}],["path",{"d":"M15 9l3 -3l3 3"}],["path",{"d":"M18 6l0 12"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4],"o":[12.5,12],"d":[1.8,0],"st":0.06}];

export const SortAscendingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SortAscendingIcon.displayName = "SortAscendingIcon";
