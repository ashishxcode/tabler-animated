"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 8h4l-4 8h4"}],["path",{"d":"M4 16v-6a2 2 0 1 1 4 0v6"}],["path",{"d":"M4 13h4"}],["path",{"d":"M11 12h2"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12,12],"d":[1.8,0],"st":0.06}];

export const SortAZIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SortAZIcon.displayName = "SortAZIcon";
