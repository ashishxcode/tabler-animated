"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13.5 11.5l6.5 6.5v-4"}],["path",{"d":"M11.5 13.5l6.5 6.5"}],["path",{"d":"M9 4a5 5 0 1 1 0 10a5 5 0 0 1 0 -10"}],["path",{"d":"M14 20l2 -2"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[9,9],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[16.75,14.75],[14.75,16.75],[15,19]]}];

export const GenderIntergenderIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GenderIntergenderIcon.displayName = "GenderIntergenderIcon";
