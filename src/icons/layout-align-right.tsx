"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 4l0 16"}],["path",{"d":"M4 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -2"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const LayoutAlignRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LayoutAlignRightIcon.displayName = "LayoutAlignRightIcon";
