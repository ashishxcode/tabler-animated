"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 9a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-4.5"}],["path",{"d":"M3 15h6v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-2"}],["path",{"d":"M6 22v-3"}],["path",{"d":"M4 15v-2.5"}],["path",{"d":"M8 15v-2.5"}]];
const rig: Rig[] = [{"fx":"flash","n":[0,1,2,3,4],"o":[11.5,14.5]}];

export const BatteryCharging2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BatteryCharging2Icon.displayName = "BatteryCharging2Icon";
