"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3h-4v6h4"}],["path",{"d":"M10 6h2.5"}],["path",{"d":"M16 21l-4 -8l-4 8l4 -2l4 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,17],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,6],[11.25,6]]}];

export const NavigationEastIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
NavigationEastIcon.displayName = "NavigationEastIcon";
