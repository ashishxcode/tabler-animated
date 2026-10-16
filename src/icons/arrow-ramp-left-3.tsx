"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 3v6"}],["path",{"d":"M8 16l-4 -4l4 -4"}],["path",{"d":"M18 21v-6a3 3 0 0 0 -3 -3h-11"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[11,12],"d":[-2.4,0]}];

export const ArrowRampLeft3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowRampLeft3Icon.displayName = "ArrowRampLeft3Icon";
