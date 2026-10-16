"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 9l4 0l0 -4"}],["path",{"d":"M3 3l6 6"}],["path",{"d":"M5 15l4 0l0 4"}],["path",{"d":"M3 21l6 -6"}],["path",{"d":"M19 9l-4 0l0 -4"}],["path",{"d":"M15 9l6 -6"}],["path",{"d":"M19 15l-4 0l0 4"}],["path",{"d":"M15 15l6 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7],"o":[12,12],"a":-0.12}];

export const ArrowsMinimizeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsMinimizeIcon.displayName = "ArrowsMinimizeIcon";
