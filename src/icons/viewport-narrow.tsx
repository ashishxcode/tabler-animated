"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12h7l-3 -3"}],["path",{"d":"M7 15l3 -3"}],["path",{"d":"M21 12h-7l3 -3"}],["path",{"d":"M17 15l-3 -3"}],["path",{"d":"M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1"}],["path",{"d":"M9 18v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-1"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4,5],"o":[12,12],"d":[2.4,0]}];

export const ViewportNarrowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ViewportNarrowIcon.displayName = "ViewportNarrowIcon";
