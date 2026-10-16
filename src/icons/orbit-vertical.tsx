"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16.372 16.372c.4 -1.295 .628 -2.785 .628 -4.372c0 -4.97 -2.239 -9 -5 -9s-5 4.03 -5 9s2.239 9 5 9c.596 0 1.168 -.188 1.698 -.533"}],["path",{"d":"M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.08},{"fx":"pop","n":[1],"o":[12,12],"a":0.22,"dl":0.1}];

export const OrbitVerticalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
OrbitVerticalIcon.displayName = "OrbitVerticalIcon";
