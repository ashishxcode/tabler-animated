"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 14v-6h6"}],["path",{"d":"M3 8l9 9l9 -9"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12,12.5],"d":[-2.4,0]}];

export const ArrowElbowLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowElbowLeftIcon.displayName = "ArrowElbowLeftIcon";
