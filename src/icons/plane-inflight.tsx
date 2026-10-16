"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 11.085h5a2 2 0 1 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3l4 7"}],["path",{"d":"M3 21h18"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12,12.54],"d":[1.9,-1.9]}];

export const PlaneInflightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlaneInflightIcon.displayName = "PlaneInflightIcon";
