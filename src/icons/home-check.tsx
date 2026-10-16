"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2"}],["path",{"d":"M19 13.488v-1.488h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.525"}],["path",{"d":"M15 19l2 2l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[18,19],"dl":0.2,"st":0.08},{"fx":"hop","n":[0,1],"o":[12,21],"d":[0,-1.8]}];

export const HomeCheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeCheckIcon.displayName = "HomeCheckIcon";
