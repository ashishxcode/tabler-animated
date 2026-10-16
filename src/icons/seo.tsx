"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3"}],["path",{"d":"M14 16h-4v-8h4"}],["path",{"d":"M11 12h2"}],["path",{"d":"M17 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12]]}];

export const SeoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SeoIcon.displayName = "SeoIcon";
