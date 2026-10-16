"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 7h12a1 1 0 0 1 1 1v4.5a2.5 2.5 0 0 1 -2.5 2.5h-.5a2 2 0 0 1 -2 -2a2 2 0 1 0 -4 0a2 2 0 0 1 -2 2h-.5a2.5 2.5 0 0 1 -2.5 -2.5v-4.5a1 1 0 0 1 1 -1"}],["path",{"d":"M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 5.5 -5.5v-9.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,11.5],"a":0.08}];

export const ScubaMaskIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ScubaMaskIcon.displayName = "ScubaMaskIcon";
