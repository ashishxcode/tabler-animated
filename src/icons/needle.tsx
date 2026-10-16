"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21c-.667 -.667 3.262 -6.236 11.785 -16.709a3.5 3.5 0 1 1 5.078 4.791c-10.575 8.612 -16.196 12.585 -16.863 11.918"}],["path",{"d":"M17.5 6.5l-1 1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.96,12.04],"a":0.08},{"fx":"pop","n":[1],"o":[17,7],"a":0.22,"dl":0.1}];

export const NeedleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
NeedleIcon.displayName = "NeedleIcon";
