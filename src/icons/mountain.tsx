"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612"}],["path",{"d":"M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12.04],"a":0.08},{"fx":"pop","n":[1],"o":[12,12.5],"a":0.22,"dl":0.1}];

export const MountainIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MountainIcon.displayName = "MountainIcon";
