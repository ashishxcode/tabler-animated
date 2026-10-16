"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 12h-2l9 -9l8 8"}],["path",{"d":"M5 12v7a2 2 0 0 0 2 2h6"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2c.688 0 1.294 .347 1.654 .875"}],["path",{"d":"M17 19a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-2"}],["path",{"d":"M18 18v-1.5a1.5 1.5 0 1 1 3 0v1.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[19.5,18.5],"a":0.35,"dl":0.2},{"fx":"lift","n":[0],"o":[11.5,7.5],"a":0,"d":[0,-1.5]}];

export const HomeLockIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeLockIcon.displayName = "HomeLockIcon";
