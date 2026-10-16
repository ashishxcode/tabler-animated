"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 14.808a25 25 0 0 0 -4 -.312c-1.439 0 -2.796 .113 -4 .312"}],["path",{"d":"M21 17.439c0 1.148 -2.034 2.142 -4.997 2.625l-.003 -10.439c2.965 -.482 5 -1.477 5 -2.625v-.064c0 -1.622 -4.03 -2.936 -9 -2.936s-9 1.314 -9 2.936c0 1.148 2.035 2.142 5 2.624l-.003 10.44c-2.963 -.483 -4.997 -1.477 -4.997 -2.625"}],["path",{"d":"M3 6.936v10.439"}],["path",{"d":"M21 6.936v10.439"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12.03],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,14.65],[3,12.16],[21,12.16]]}];

export const VirtualSpaceIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VirtualSpaceIcon.displayName = "VirtualSpaceIcon";
