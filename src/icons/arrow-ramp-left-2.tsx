"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 3v8.707"}],["path",{"d":"M8 14l-4 -4l4 -4"}],["path",{"d":"M18 21c0 -6.075 -4.925 -11 -11 -11h-3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[11,12],"d":[-2.4,0]}];

export const ArrowRampLeft2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowRampLeft2Icon.displayName = "ArrowRampLeft2Icon";
