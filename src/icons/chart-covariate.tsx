"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 11h.009"}],["path",{"d":"M14 15h.009"}],["path",{"d":"M12 6h.009"}],["path",{"d":"M8 10h.009"}],["path",{"d":"M3 21l17 -17"}],["path",{"d":"M3 3v18h18"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5],"o":[12,12],"st":0.08}];

export const ChartCovariateIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartCovariateIcon.displayName = "ChartCovariateIcon";
