"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4"}],["path",{"d":"M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2"}],["path",{"d":"M8 12h8"}],["path",{"d":"M7 19v2"}],["path",{"d":"M17 19v2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,14.5],"a":0.06},{"fx":"pop","n":[0,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,6.5],[12,12],[7,20],[17,20]]}];

export const Armchair2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Armchair2Icon.displayName = "Armchair2Icon";
