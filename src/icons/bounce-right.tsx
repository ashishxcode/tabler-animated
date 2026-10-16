"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 15.5c3 -1 5.5 -.5 8 4.5c.5 -3 1.5 -5.5 3 -8"}],["path",{"d":"M18 9a2 2 0 1 1 0 -4a2 2 0 0 1 0 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[9.5,16],"a":0.08},{"fx":"pop","n":[1],"o":[18,7],"a":0.22,"dl":0.1}];

export const BounceRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BounceRightIcon.displayName = "BounceRightIcon";
