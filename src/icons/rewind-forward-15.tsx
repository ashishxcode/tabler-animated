"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 9l3 -3l-3 -3"}],["path",{"d":"M9 18a6 6 0 1 1 0 -12h11"}],["path",{"d":"M16 20h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3"}],["path",{"d":"M13 14v6"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[11.5,12],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[18.5,6],[17.5,17],[13,17]]}];

export const RewindForward15Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RewindForward15Icon.displayName = "RewindForward15Icon";
