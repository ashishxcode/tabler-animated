"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 21l-4 -8l-4 8l4 -2l4 2"}],["path",{"d":"M10 9v-6l4 6v-6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,17],"a":0.08},{"fx":"pop","n":[1],"o":[12,6],"a":0.22,"dl":0.1}];

export const NavigationNorthIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
NavigationNorthIcon.displayName = "NavigationNorthIcon";
