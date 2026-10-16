"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20l16 0"}],["path",{"d":"M9 6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -8"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const LayoutAlignBottomIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LayoutAlignBottomIcon.displayName = "LayoutAlignBottomIcon";
