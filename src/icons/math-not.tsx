"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 12h14v4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,14],"a":0.12}];

export const MathNotIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathNotIcon.displayName = "MathNotIcon";
