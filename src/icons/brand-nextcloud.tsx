"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M2 12.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"}],["path",{"d":"M17 12.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.1}];

export const BrandNextcloudIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandNextcloudIcon.displayName = "BrandNextcloudIcon";
