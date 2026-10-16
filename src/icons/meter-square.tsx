"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 5h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"}],["path",{"d":"M4 12v6"}],["path",{"d":"M4 14a2 2 0 0 1 2 -2h.5a2.5 2.5 0 0 1 2.5 2.5v3.5"}],["path",{"d":"M9 15.5v-1a2.5 2.5 0 1 1 5 0v3.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,11.5],"a":0.06}];

export const MeterSquareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MeterSquareIcon.displayName = "MeterSquareIcon";
