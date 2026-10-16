"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 6v4"}],["path",{"d":"M13 14h8q -2.518 -3 -4 -3"}],["path",{"d":"M13 6v9.958c0 .963 0 1.444 -.293 1.743s-.764 .299 -1.707 .299h-1"}],["path",{"d":"M7 6v9.958c0 .963 0 1.444 -.293 1.743s-.764 .299 -1.707 .299h-1"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[17,12.5],"st":0.07},{"fx":"pop","n":[2,3],"o":[8.5,12],"a":0.04}];

export const AlphabetArabicIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlphabetArabicIcon.displayName = "AlphabetArabicIcon";
