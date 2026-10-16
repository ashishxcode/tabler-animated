"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 18l0 -15"}],["path",{"d":"M15 6l-3 -3l-3 3"}],["path",{"d":"M15 21l-3 -3l-3 3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[0,-2.4]}];

export const ArrowUpTailIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowUpTailIcon.displayName = "ArrowUpTailIcon";
