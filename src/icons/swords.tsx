"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11l5 0"}],["path",{"d":"M5 13l6 6"}],["path",{"d":"M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365"}],["path",{"d":"M10 5.5l-2 -2.5h-5v5l3 2.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,16],[17.66,17.82],[6.5,6.75]]}];

export const SwordsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SwordsIcon.displayName = "SwordsIcon";
