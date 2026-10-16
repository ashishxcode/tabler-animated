"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 14a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M19 5l-5.4 5.4"}],["path",{"d":"M19 5l-5 0"}],["path",{"d":"M19 5l0 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[10,14],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[16.3,7.7],[16.5,5],[19,7.5]]}];

export const MarsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MarsIcon.displayName = "MarsIcon";
