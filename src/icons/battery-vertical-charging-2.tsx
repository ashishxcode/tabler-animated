"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 18v-11c0 -1.105 .895 -2 2 -2h.5c.276 0 .5 -.224 .5 -.5s.224 -.5 .5 -.5h3c.276 0 .5 .224 .5 .5s.224 .5 .5 .5h.5c1.105 0 2 .895 2 2v1m-10 10c0 1.105 .895 2 2 2h1"}],["path",{"d":"M12 14h6v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2"}],["path",{"d":"M15 21v-3"}],["path",{"d":"M13 14v-2.5"}],["path",{"d":"M17 14v-2.5"}]];
const rig: Rig[] = [{"fx":"flash","n":[0,1,2,3,4],"o":[12.5,12.5]}];

export const BatteryVerticalCharging2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BatteryVerticalCharging2Icon.displayName = "BatteryVerticalCharging2Icon";
