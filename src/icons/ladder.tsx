"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 3v18"}],["path",{"d":"M16 3v18"}],["path",{"d":"M8 14h8"}],["path",{"d":"M8 10h8"}],["path",{"d":"M8 6h8"}],["path",{"d":"M8 18h8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,14],[12,10],[12,6],[12,18]]}];

export const LadderIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LadderIcon.displayName = "LadderIcon";
