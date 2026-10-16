"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 11h18"}],["path",{"d":"M5 11v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4"}],["path",{"d":"M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M10 17h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,7.5],"a":0.06},{"fx":"pop","n":[2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,17],[17,17],[12,17]]}];

export const SpyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SpyIcon.displayName = "SpyIcon";
