"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 10l-2 9l-4 3l-3 -5l-3 -1l-2 -6l2 -5l3 -2l3 3l4 1l2 3"}],["path",{"d":"M3 10h18"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12.5],"a":0.08}];

export const IcebergIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
IcebergIcon.displayName = "IcebergIcon";
