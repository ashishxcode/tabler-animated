"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3.5 17.5c5.667 4.667 11.333 4.667 17 0"}],["path",{"d":"M19 18.5l-2 -8.5l1 -2l2 1l1.5 -1.5l-2.5 -4.5c-5.052 .218 -5.99 3.133 -7 6h-6a3 3 0 0 0 -3 3"}],["path",{"d":"M5 18.5l2 -9.5"}],["path",{"d":"M8 20l2 -5h4l2 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12.25,10.75],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,19.25],[6,13.75],[12,17.5]]}];

export const HorseToyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HorseToyIcon.displayName = "HorseToyIcon";
