"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19l15 -15l3 3l-6 6l2 2a14 14 0 0 1 -14 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,11.75],"a":0.12}];

export const SliceIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SliceIcon.displayName = "SliceIcon";
