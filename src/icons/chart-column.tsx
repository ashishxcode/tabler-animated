"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20h3"}],["path",{"d":"M17 20h3"}],["path",{"d":"M10.5 20h3"}],["path",{"d":"M4 16h3"}],["path",{"d":"M17 16h3"}],["path",{"d":"M10.5 16h3"}],["path",{"d":"M4 12h3"}],["path",{"d":"M17 12h3"}],["path",{"d":"M10.5 12h3"}],["path",{"d":"M4 8h3"}],["path",{"d":"M17 8h3"}],["path",{"d":"M4 4h3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5,6,7,8,9,10,11],"o":[12,12],"st":0.08}];

export const ChartColumnIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartColumnIcon.displayName = "ChartColumnIcon";
