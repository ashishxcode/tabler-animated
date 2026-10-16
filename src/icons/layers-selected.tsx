"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 10.5l6.492 -6.492"}],["path",{"d":"M13.496 16l6.504 -6.504l-6.504 6.504"}],["path",{"d":"M8.586 15.414l10.827 -10.827"}],["path",{"d":"M8 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8"}],["path",{"d":"M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4],"o":[12,12],"d":[0,-1.5],"st":0.07}];

export const LayersSelectedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LayersSelectedIcon.displayName = "LayersSelectedIcon";
