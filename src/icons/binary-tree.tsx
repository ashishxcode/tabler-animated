"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M5.058 18.306l2.88 -4.606"}],["path",{"d":"M10.061 10.303l2.877 -4.604"}],["path",{"d":"M10.065 13.705l2.876 4.6"}],["path",{"d":"M15.063 5.7l2.881 4.61"}]];
const rig: Rig[] = [{"fx":"sway","n":[0,1,2,3,4,5,6,7,8],"o":[11.5,22],"a":5}];

export const BinaryTreeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BinaryTreeIcon.displayName = "BinaryTreeIcon";
