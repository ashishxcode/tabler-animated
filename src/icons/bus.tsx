"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8"}],["path",{"d":"M16 5l1.5 7l4.5 0"}],["path",{"d":"M2 10l15 0"}],["path",{"d":"M7 5l0 5"}],["path",{"d":"M12 5l0 5"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5,6],"o":[12,12],"d":[2.4,0]}];

export const BusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BusIcon.displayName = "BusIcon";
