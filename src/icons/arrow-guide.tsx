"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 19h3a2 2 0 0 0 2 -2v-8a2 2 0 0 1 2 -2h7"}],["path",{"d":"M18 4l3 3l-3 3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12.5],"d":[2.4,0]}];

export const ArrowGuideIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowGuideIcon.displayName = "ArrowGuideIcon";
