"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 16v-13"}],["path",{"d":"M15 6l-3 -3l-3 3"}],["path",{"d":"M14.5 18.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5l2.5 2.5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[0,-2.4]}];

export const ArrowUpRhombusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowUpRhombusIcon.displayName = "ArrowUpRhombusIcon";
