"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -10"}],["path",{"d":"M7 20h10"}],["path",{"d":"M9 16v4"}],["path",{"d":"M15 16v4"}],["path",{"d":"M7 10h2l2 3l2 -6l1 3h3"}]];
const rig: Rig[] = [{"fx":"beat","n":[0,1,2,3,4],"o":[12,12]}];

export const HeartRateMonitorIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HeartRateMonitorIcon.displayName = "HeartRateMonitorIcon";
