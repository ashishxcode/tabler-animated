"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 14l1.5 1.5"}],["path",{"d":"M18.347 15.575l2.08 2.079a1.96 1.96 0 0 1 -2.773 2.772l-2.08 -2.079a1.96 1.96 0 0 1 2.773 -2.772"}],["path",{"d":"M3 6l3 -3l7.414 7.414a2 2 0 0 1 .586 1.414v2.172h-2.172a2 2 0 0 1 -1.414 -.586l-7.414 -7.414"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[8.5,8.5],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[14.75,14.75],[18,18]]}];

export const ChiselIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChiselIcon.displayName = "ChiselIcon";
