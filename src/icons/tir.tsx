"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 18h8m4 0h2v-6a5 7 0 0 0 -5 -7h-1l1.5 7h4.5"}],["path",{"d":"M12 18v-13h3"}],["path",{"d":"M3 17l0 -5l9 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[14,11.5],"a":0.06},{"fx":"pop","n":[0,1,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,17],[17,17],[13.5,11.5],[7.5,14.5]]}];

export const TirIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TirIcon.displayName = "TirIcon";
