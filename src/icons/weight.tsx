"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M6.835 9h10.33a1 1 0 0 1 .984 .821l1.637 9a1 1 0 0 1 -.984 1.179h-13.604a1 1 0 0 1 -.984 -1.179l1.637 -9a1 1 0 0 1 .984 -.821"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,14.5],"a":0.08},{"fx":"pop","n":[0],"o":[12,6],"a":0.22,"dl":0.1}];

export const WeightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WeightIcon.displayName = "WeightIcon";
