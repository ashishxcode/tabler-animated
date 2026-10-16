"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14"}],["path",{"d":"M7 9v-2"}],["path",{"d":"M10 13v-6"}],["path",{"d":"M13 11v-4"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const AlignBoxTopLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlignBoxTopLeftIcon.displayName = "AlignBoxTopLeftIcon";
