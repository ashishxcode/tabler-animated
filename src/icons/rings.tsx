"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M7 15v-11"}],["path",{"d":"M17 15v-11"}],["path",{"d":"M3 4h18"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[12,4],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,17],[17,17],[7,9.5],[17,9.5]]}];

export const RingsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RingsIcon.displayName = "RingsIcon";
