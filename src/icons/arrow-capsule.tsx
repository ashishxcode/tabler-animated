"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 15a6 6 0 1 1 -12 0v-6a6 6 0 1 1 12 0v2"}],["path",{"d":"M15 8l3 3l3 -3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[13.5,12],"d":[2.4,0]}];

export const ArrowCapsuleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowCapsuleIcon.displayName = "ArrowCapsuleIcon";
