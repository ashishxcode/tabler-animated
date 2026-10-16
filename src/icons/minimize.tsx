"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 19v-2a2 2 0 0 1 2 -2h2"}],["path",{"d":"M15 5v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M5 15h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M5 9h2a2 2 0 0 0 2 -2v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":-0.12}];

export const MinimizeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MinimizeIcon.displayName = "MinimizeIcon";
