"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M14 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2],"o":[11,12],"st":0.08}];

export const ChartBubbleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartBubbleIcon.displayName = "ChartBubbleIcon";
