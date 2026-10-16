"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11.19 20.27l-2.19 .73v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1.5"}],["path",{"d":"M20 21l2 -2l-2 -2"}],["path",{"d":"M17 17l-2 2l2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[18.5,19],"a":0.35,"dl":0.2},{"fx":"nudge","n":[0],"o":[12,12.5],"d":[1.8,0]}];

export const FilterCodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FilterCodeIcon.displayName = "FilterCodeIcon";
