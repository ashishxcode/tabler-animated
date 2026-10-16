"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 13.4v-1.4h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2c.402 0 .777 .119 1.091 .323"}],["path",{"d":"M21.5 21.5l-5 -5"}],["path",{"d":"M16.5 21.5l5 -5"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"hop","n":[0,1],"o":[12,21],"d":[0,-1.8]}];

export const HomeXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeXIcon.displayName = "HomeXIcon";
