"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12h18"}],["path",{"d":"M12 21v-18"}],["path",{"d":"M7.5 7.5l9 9"}],["path",{"d":"M7.5 16.5l9 -9"}]];
const rig: Rig[] = [{"fx":"twinkle","n":[0,1,2,3],"o":[12,12]}];

export const NorthStarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
NorthStarIcon.displayName = "NorthStarIcon";
