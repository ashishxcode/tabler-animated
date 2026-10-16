"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 20h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3"}],["path",{"d":"M15 18a6 6 0 1 0 0 -12h-11"}],["path",{"d":"M5 14v6"}],["path",{"d":"M7 9l-3 -3l3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12.5,12],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[9.5,17],[5,17],[5.5,6]]}];

export const RewindBackward15Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RewindBackward15Icon.displayName = "RewindBackward15Icon";
