"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 13v5a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h9"}],["path",{"d":"M17 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 11h4v4"}],["path",{"d":"M10 15l4 -4"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[12,19],"d":[0,-2.2]}];

export const PinInvokeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PinInvokeIcon.displayName = "PinInvokeIcon";
