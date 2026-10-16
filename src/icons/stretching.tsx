"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M5 20l5 -.5l1 -2"}],["path",{"d":"M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[13.75,14.25],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[16,5],[8,18.75]]}];

export const StretchingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StretchingIcon.displayName = "StretchingIcon";
