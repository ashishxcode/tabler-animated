"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 4l0 16"}],["path",{"d":"M20 4l0 16"}],["path",{"d":"M9 8a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -8"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2],"o":[12,12],"d":[0,-1.5],"st":0.07}];

export const LayoutDistributeVerticalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LayoutDistributeVerticalIcon.displayName = "LayoutDistributeVerticalIcon";
