"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 21v-12"}],["path",{"d":"M8 13l4 -4l4 4"}],["path",{"d":"M21 12a9 9 0 0 0 -18 0"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[0,-2.4]}];

export const ArrowUpToArcIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowUpToArcIcon.displayName = "ArrowUpToArcIcon";
