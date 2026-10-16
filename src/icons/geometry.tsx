"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714"}],["path",{"d":"M10 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5"}],["path",{"d":"M12 5v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2],"o":[12,15],"a":0.06},{"fx":"pop","n":[1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,7],[12,4]]}];

export const GeometryIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GeometryIcon.displayName = "GeometryIcon";
