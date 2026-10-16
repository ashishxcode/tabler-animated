"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0"}],["path",{"d":"M8 12h12"}],["path",{"d":"M20 6h-12a2 2 0 0 0 -2 2v2"}],["path",{"d":"M6 14v2a2 2 0 0 0 2 2h12"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2,3],"o":[13,12],"a":0.06},{"fx":"pop","n":[0],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,12]]}];

export const CapStraightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CapStraightIcon.displayName = "CapStraightIcon";
