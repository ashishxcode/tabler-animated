"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M7 3v4h4"}],["path",{"d":"M9 17l0 4"}],["path",{"d":"M17 14l0 7"}],["path",{"d":"M13 13l0 8"}],["path",{"d":"M21 12l0 9"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5],"o":[12,12],"st":0.08}];

export const ChartInfographicIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartInfographicIcon.displayName = "ChartInfographicIcon";
