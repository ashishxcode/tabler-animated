"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 12h2"}],["path",{"d":"M20 12h2"}],["path",{"d":"M4 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7.5 10.5l7.5 -5.5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4],"o":[12,9.5],"d":[-2.2,0]}];

export const CircuitSwitchOpenIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircuitSwitchOpenIcon.displayName = "CircuitSwitchOpenIcon";
