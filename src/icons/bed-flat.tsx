"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 13h11v-2a3 3 0 0 0 -3 -3h-8v5"}],["path",{"d":"M3 16h18"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,16],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,11],[15.5,10.5]]}];

export const BedFlatIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BedFlatIcon.displayName = "BedFlatIcon";
