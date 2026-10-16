"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M7 15l0 .01"}],["path",{"d":"M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10.5 17l6.5 0"}],["path",{"d":"M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5"}],["path",{"d":"M18 5h-1a1 1 0 0 0 -1 1v4"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[12.5,10.1],"a":0.06},{"fx":"pop","n":[0,1,2,3,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,15],[7,15.01],[19,17],[13.75,17],[17,7.5]]}];

export const TractorIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TractorIcon.displayName = "TractorIcon";
