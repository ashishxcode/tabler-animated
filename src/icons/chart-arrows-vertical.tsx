"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 21v-14"}],["path",{"d":"M9 15l3 -3l3 3"}],["path",{"d":"M15 10l3 -3l3 3"}],["path",{"d":"M3 21l18 0"}],["path",{"d":"M12 21l0 -9"}],["path",{"d":"M3 6l3 -3l3 3"}],["path",{"d":"M6 21v-18"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4,5,6],"o":[12,12],"d":[2.4,0]}];

export const ChartArrowsVerticalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartArrowsVerticalIcon.displayName = "ChartArrowsVerticalIcon";
