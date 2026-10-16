"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6c6.944 0 9.056 8 16 8"}],["path",{"d":"M4 12c6.37 0 9.63 6 16 6"}],["path",{"d":"M20 6c-7.526 0 -7.905 12 -16 12"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2],"o":[12,12],"st":0.08}];

export const ChartSankeyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartSankeyIcon.displayName = "ChartSankeyIcon";
