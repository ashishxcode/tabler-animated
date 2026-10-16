"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 17.998v-.5l-8.13 -14.99a1 1 0 0 0 -1.74 0l-8.13 14.989v.5c0 1.659 4.03 3.003 9 3.003s9 -1.344 9 -3.002"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,11.5],"a":0.12}];

export const ConeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ConeIcon.displayName = "ConeIcon";
