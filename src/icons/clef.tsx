"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 12a4.16 4.16 0 0 1 -5.62 3.89a3.78 3.78 0 0 1 -2.38 -3.39a3.42 3.42 0 0 1 2.34 -3.38l3.79 -1.42a2.89 2.89 0 0 0 1.87 -2.7a2 2 0 1 0 -4 0v14a2 2 0 1 1 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.12}];

export const ClefIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClefIcon.displayName = "ClefIcon";
