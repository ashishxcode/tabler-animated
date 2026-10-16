"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 20a5 5 0 1 1 0 -10a5 5 0 0 1 0 10"}],["path",{"d":"M6 6l5.4 5.4"}],["path",{"d":"M4 8l4 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[15,15],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.7,8.7],[6,6]]}];

export const GenderTravestiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GenderTravestiIcon.displayName = "GenderTravestiIcon";
