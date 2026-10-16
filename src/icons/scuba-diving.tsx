"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M2 2l3 3l1.5 4l3.5 2l6 2l1 4l2.5 3"}],["path",{"d":"M11 8l4.5 1.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[10.75,11],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[20,12],[13.25,8.75]]}];

export const ScubaDivingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ScubaDivingIcon.displayName = "ScubaDivingIcon";
