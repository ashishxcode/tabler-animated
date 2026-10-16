"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 8v-1a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v1"}],["path",{"d":"M3 16v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-1"}],["path",{"d":"M21.01 12h.01"}],["path",{"d":"M3.01 12h.01"}],["path",{"d":"M10 15v-4a2 2 0 1 1 4 0v4"}],["path",{"d":"M10 13h4"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5],"o":[12.01,12],"d":[2.4,0],"st":0.06}];

export const TextOutlineIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TextOutlineIcon.displayName = "TextOutlineIcon";
