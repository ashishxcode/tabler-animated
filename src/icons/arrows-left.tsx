"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7l18 0"}],["path",{"d":"M6 20l-3 -3l3 -3"}],["path",{"d":"M6 4l-3 3l3 3"}],["path",{"d":"M3 17l18 0"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[-2.4,0]}];

export const ArrowsLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsLeftIcon.displayName = "ArrowsLeftIcon";
