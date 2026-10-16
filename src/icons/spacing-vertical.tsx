"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"}],["path",{"d":"M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"}],["path",{"d":"M16 12h-8"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"st":0.07},{"fx":"pop","n":[0,1],"o":[12,12],"a":0.04}];

export const SpacingVerticalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SpacingVerticalIcon.displayName = "SpacingVerticalIcon";
