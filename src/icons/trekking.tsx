"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M7 21l2 -4"}],["path",{"d":"M13 21v-4l-3 -3l1 -6l3 4l3 2"}],["path",{"d":"M10 14l-1.827 -1.218a2 2 0 0 1 -.831 -2.15l.28 -1.117a2 2 0 0 1 1.939 -1.515h1.439l4 1l3 -2"}],["path",{"d":"M17 12v9"}],["path",{"d":"M16 20h2"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[12.64,14],"a":0.06},{"fx":"pop","n":[0,1,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,4],[8,19],[17,16.5],[17,20]]}];

export const TrekkingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrekkingIcon.displayName = "TrekkingIcon";
