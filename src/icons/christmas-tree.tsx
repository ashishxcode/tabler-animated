"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3l4 4l-2 1l4 4l-3 1l4 4h-14l4 -4l-3 -1l4 -4l-2 -1l4 -4"}],["path",{"d":"M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3"}]];
const rig: Rig[] = [{"fx":"sway","n":[0,1],"o":[12,21],"a":5}];

export const ChristmasTreeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChristmasTreeIcon.displayName = "ChristmasTreeIcon";
