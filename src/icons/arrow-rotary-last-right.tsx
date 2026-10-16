"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M9 15v6"}],["path",{"d":"M11.5 9.5l6.5 -6.5"}],["path",{"d":"M13 3h5v5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[2.4,0]}];

export const ArrowRotaryLastRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowRotaryLastRightIcon.displayName = "ArrowRotaryLastRightIcon";
