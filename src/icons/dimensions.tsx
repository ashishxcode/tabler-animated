"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5h11"}],["path",{"d":"M12 7l2 -2l-2 -2"}],["path",{"d":"M5 3l-2 2l2 2"}],["path",{"d":"M19 10v11"}],["path",{"d":"M17 19l2 2l2 -2"}],["path",{"d":"M21 12l-2 -2l-2 2"}],["path",{"d":"M3 12a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2l0 -7"}]];
const rig: Rig[] = [{"fx":"pop","n":[6],"o":[8.5,15.5],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.5,5],[13,5],[4,5],[19,15.5],[19,20],[19,11]]}];

export const DimensionsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DimensionsIcon.displayName = "DimensionsIcon";
