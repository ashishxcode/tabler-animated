"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 7l2 9m-10 -9l-2 9m-1 -9h14m2 5h-18"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,11.5],"a":0.12}];

export const PicnicTableIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PicnicTableIcon.displayName = "PicnicTableIcon";
