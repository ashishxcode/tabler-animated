"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 18a6 6 0 1 1 0 -12h11"}],["path",{"d":"M13 20h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3"}],["path",{"d":"M17 9l3 -3l-3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.5,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[14.5,17],[18.5,6]]}];

export const RewindForward5Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RewindForward5Icon.displayName = "RewindForward5Icon";
