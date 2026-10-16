"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2"}],["path",{"d":"M10 8l-2 0l0 2"}],["path",{"d":"M8 14l0 2l2 0"}],["path",{"d":"M14 8l2 0l0 2"}],["path",{"d":"M16 14l0 2l-2 0"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4],"o":[12,12],"d":[0,-1.5],"st":0.07}];

export const LayersDifferenceIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LayersDifferenceIcon.displayName = "LayersDifferenceIcon";
