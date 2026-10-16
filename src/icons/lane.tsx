"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6v13"}],["path",{"d":"M20 6v13"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12.5],"a":0.08}];

export const LaneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LaneIcon.displayName = "LaneIcon";
