"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 20l9 -7"}],["path",{"d":"M12 3v10l9 7"}],["path",{"d":"M17 12v.015"}],["path",{"d":"M17 4.015v.015"}],["path",{"d":"M21 8.015v.015"}],["path",{"d":"M12 19.015v.015"}],["path",{"d":"M3 12.015v.015"}],["path",{"d":"M7 8.015v.015"}],["path",{"d":"M3 4.015v.015"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5,6,7,8],"o":[12,11.5],"st":0.08}];

export const ChartScatter3dIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartScatter3dIcon.displayName = "ChartScatter3dIcon";
