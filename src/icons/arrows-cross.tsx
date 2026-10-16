"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 4h4v4"}],["path",{"d":"M15 9l5 -5"}],["path",{"d":"M4 20l5 -5"}],["path",{"d":"M16 20h4v-4"}],["path",{"d":"M4 4l16 16"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4],"o":[12,12],"d":[2.4,0]}];

export const ArrowsCrossIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsCrossIcon.displayName = "ArrowsCrossIcon";
