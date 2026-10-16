"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 6a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3l0 -12"}],["path",{"d":"M10 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 6h4"}],["path",{"d":"M9 18h6"}]];
const rig: Rig[] = [{"fx":"swing","n":[0,1,2,3],"o":[12,4],"a":7}];

export const IdBadgeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
IdBadgeIcon.displayName = "IdBadgeIcon";
