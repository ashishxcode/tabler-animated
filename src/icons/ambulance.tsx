"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"}],["path",{"d":"M6 10h4m-2 -2v4"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,11],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,17],[17,17],[8,10]]}];

export const AmbulanceIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AmbulanceIcon.displayName = "AmbulanceIcon";
