"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 3v6"}],["path",{"d":"M16 16l4 -4l-4 -4"}],["path",{"d":"M6 21v-6a3 3 0 0 1 3 -3h11"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[13,12],"d":[2.4,0]}];

export const ArrowRampRight3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowRampRight3Icon.displayName = "ArrowRampRight3Icon";
