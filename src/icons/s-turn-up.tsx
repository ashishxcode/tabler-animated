"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M5 17v-9.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0v-13.5"}],["path",{"d":"M16 6l3 -3l3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,11.5],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,19],[19,4.5]]}];

export const STurnUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
STurnUpIcon.displayName = "STurnUpIcon";
