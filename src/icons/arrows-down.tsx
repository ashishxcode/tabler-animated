"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 21l0 -18"}],["path",{"d":"M20 18l-3 3l-3 -3"}],["path",{"d":"M4 18l3 3l3 -3"}],["path",{"d":"M17 21l0 -18"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[0,2.4]}];

export const ArrowsDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsDownIcon.displayName = "ArrowsDownIcon";
