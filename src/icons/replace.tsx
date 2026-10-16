"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"}],["path",{"d":"M15 16a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"}],["path",{"d":"M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3"}],["path",{"d":"M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3"}]];
const rig: Rig[] = [{"fx":"spin","n":[0,1,2,3],"o":[12,12],"a":360}];

export const ReplaceIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ReplaceIcon.displayName = "ReplaceIcon";
