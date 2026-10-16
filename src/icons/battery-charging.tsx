"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 7h1a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-2"}],["path",{"d":"M8 7h-2a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h1"}],["path",{"d":"M12 8l-2 4h3l-2 4"}]];
const rig: Rig[] = [{"fx":"flash","n":[0,1,2],"o":[12,12]}];

export const BatteryChargingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BatteryChargingIcon.displayName = "BatteryChargingIcon";
