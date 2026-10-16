"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.5 7.5l4.5 4.5l4.5 -4.5"}],["path",{"d":"M6 16v-4"}],["path",{"d":"M18 16v-4"}],["path",{"d":"M16 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,9.75],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,14],[18,14],[18,6],[18,18],[6,6],[6,18]]}];

export const MicrofrontendsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MicrofrontendsIcon.displayName = "MicrofrontendsIcon";
