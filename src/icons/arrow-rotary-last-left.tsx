"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 15a3 3 0 1 1 0 -6a3 3 0 0 1 0 6"}],["path",{"d":"M15 15v6"}],["path",{"d":"M12.5 9.5l-6.5 -6.5"}],["path",{"d":"M11 3h-5v5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[-2.4,0]}];

export const ArrowRotaryLastLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowRotaryLastLeftIcon.displayName = "ArrowRotaryLastLeftIcon";
