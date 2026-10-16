"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 3v18h18"}],["path",{"d":"M8 15.015v.015"}],["path",{"d":"M16 16.015v.015"}],["path",{"d":"M8 7.03v.015"}],["path",{"d":"M12 11.03v.015"}],["path",{"d":"M19 11.03v.015"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5],"o":[12,12],"st":0.08}];

export const ChartScatterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartScatterIcon.displayName = "ChartScatterIcon";
