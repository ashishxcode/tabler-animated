"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0"}],["path",{"d":"M14.5 10.5l-2.5 2.5"}],["path",{"d":"M17 8l1 -1"}],["path",{"d":"M14 3h-4"}]];
const rig: Rig[] = [{"fx":"spin","n":[1],"o":[12,12],"a":360},{"fx":"pop","n":[0,2,3],"o":[12,11.5],"a":0.05}];

export const StopwatchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StopwatchIcon.displayName = "StopwatchIcon";
