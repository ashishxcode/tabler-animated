"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 3v18h18"}],["path",{"d":"M7 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M11 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M21 3l-6 1.5"}],["path",{"d":"M14.113 6.65l2.771 3.695"}],["path",{"d":"M16 12.5l-5 2"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2,3,4,5,6],"st":0.06,"os":[[12,12],[9,15],[13,5],[18,12],[18,3.75],[15.5,8.5],[13.5,13.5]]}];

export const ChartDots2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartDots2Icon.displayName = "ChartDots2Icon";
