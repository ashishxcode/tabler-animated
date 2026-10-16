"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 12v-5c0 -1.105 -.895 -2 -2 -2h-.5c-.276 0 -.5 -.224 -.5 -.5s-.224 -.5 -.5 -.5h-3c-.276 0 -.5 .224 -.5 .5s-.224 .5 -.5 .5h-.5c-1.105 0 -2 .895 -2 2v11c0 1.105 .895 2 2 2h6"}],["path",{"d":"M19 16v3"}],["path",{"d":"M19 22v.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[19,19.01],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,12],"a":0.06}];

export const BatteryVerticalExclamationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BatteryVerticalExclamationIcon.displayName = "BatteryVerticalExclamationIcon";
