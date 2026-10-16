"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 8l0 8"}],["path",{"d":"M12 8l0 8"}],["path",{"d":"M19 8v2a2 2 0 0 1 -2 2h-12"}]];
const rig: Rig[] = [{"fx":"draw","n":[5,6],"o":[8.5,12],"st":0.07},{"fx":"pop","n":[7],"o":[12,10],"a":0.04}];

export const ManualGearboxIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ManualGearboxIcon.displayName = "ManualGearboxIcon";
