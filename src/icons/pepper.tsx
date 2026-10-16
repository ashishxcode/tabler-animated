"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 11c0 2.21 -2.239 4 -5 4s-5 -1.79 -5 -4a8 8 0 1 0 16 0a3 3 0 0 0 -6 0"}],["path",{"d":"M16 8c0 -2 2 -4 4 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11,13.5],"a":0.08},{"fx":"pop","n":[1],"o":[18,6],"a":0.22,"dl":0.1}];

export const PepperIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PepperIcon.displayName = "PepperIcon";
