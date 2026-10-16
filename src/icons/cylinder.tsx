"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 6a7 3 0 1 0 14 0a7 3 0 1 0 -14 0"}],["path",{"d":"M5 6v12c0 1.657 3.134 3 7 3s7 -1.343 7 -3v-12"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.12}];

export const CylinderIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CylinderIcon.displayName = "CylinderIcon";
