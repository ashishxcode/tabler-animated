"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 11.1c0 -4.474 -3.582 -8.1 -8 -8.1s-8 3.626 -8 8.1a.9 .9 0 0 0 .9 .9h14.2a.9 .9 0 0 0 .9 -.9"}],["path",{"d":"M10 12v7a2 2 0 1 0 4 0v-7"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,7.5],"a":0.08},{"fx":"pop","n":[1],"o":[12,16.5],"a":0.22,"dl":0.1}];

export const MushroomIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MushroomIcon.displayName = "MushroomIcon";
