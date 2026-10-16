"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16"}],["path",{"d":"M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1"}],["path",{"d":"M16 4l-4 4l-4 -4"}],["path",{"d":"M4 6.5l8 7.5l8 -7.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.1}];

export const BrandGmailIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandGmailIcon.displayName = "BrandGmailIcon";
