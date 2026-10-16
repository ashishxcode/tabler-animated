"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 18l14 0"}],["path",{"d":"M9 9l3 3l-3 3"}],["path",{"d":"M14 15l3 3l-3 3"}],["path",{"d":"M3 3l0 18"}],["path",{"d":"M3 12l9 0"}],["path",{"d":"M18 3l3 3l-3 3"}],["path",{"d":"M3 6l18 0"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4,5,6],"o":[12,12],"d":[2.4,0]}];

export const ChartArrowsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartArrowsIcon.displayName = "ChartArrowsIcon";
