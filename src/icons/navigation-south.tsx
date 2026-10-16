"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 8.25c0 .414 .336 .75 .75 .75h2.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h2.25a.75 .75 0 0 1 .75 .75"}],["path",{"d":"M16 21l-4 -8l-4 8l4 -2l4 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,17],"a":0.08},{"fx":"pop","n":[0],"o":[12,6],"a":0.22,"dl":0.1}];

export const NavigationSouthIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
NavigationSouthIcon.displayName = "NavigationSouthIcon";
