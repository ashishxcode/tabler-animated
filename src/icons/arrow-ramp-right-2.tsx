"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 3v8.707"}],["path",{"d":"M16 14l4 -4l-4 -4"}],["path",{"d":"M6 21c0 -6.075 4.925 -11 11 -11h3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[13,12],"d":[2.4,0]}];

export const ArrowRampRight2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowRampRight2Icon.displayName = "ArrowRampRight2Icon";
