"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M16.437 16.44a3 3 0 0 0 4.123 4.123m1.44 -2.563a3 3 0 0 0 -3 -3"}],["path",{"d":"M12 19v-4l-3 -3l1.665 -1.332m2.215 -1.772l1.12 -.896l2 3h3"}],["path",{"d":"M16 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[19,18],"a":0.35,"dl":0.2},{"fx":"slide","n":[0,2,3],"o":[10.5,12.5],"d":[2.4,0]}];

export const BikeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BikeOffIcon.displayName = "BikeOffIcon";
