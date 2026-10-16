"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 9l-3 -3l3 -3"}],["path",{"d":"M15.997 17.918a6.002 6.002 0 0 0 -.997 -11.918h-11"}],["path",{"d":"M6 14v6"}],["path",{"d":"M9 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12.49,11.96],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[5.5,6],[6,17],[10.5,17]]}];

export const RewindBackward10Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RewindBackward10Icon.displayName = "RewindBackward10Icon";
