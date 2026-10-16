"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1"}],["path",{"d":"M12 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"}],["path",{"d":"M16 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"}],["path",{"d":"M8 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,16],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.5,6],[15.5,6],[7.5,6]]}];

export const SoupIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SoupIcon.displayName = "SoupIcon";
