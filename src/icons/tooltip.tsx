"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M12 13l-1.707 -1.707a1 1 0 0 0 -.707 -.293h-2.586a2 2 0 0 1 -2 -2v-3a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2.586a1 1 0 0 0 -.707 .293l-1.707 1.707"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,8.5],"a":0.08},{"fx":"pop","n":[0],"o":[12,18],"a":0.22,"dl":0.1}];

export const TooltipIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TooltipIcon.displayName = "TooltipIcon";
