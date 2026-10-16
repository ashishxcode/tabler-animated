"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 8a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M13 17a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M4.5 4.5l7 7"}],["path",{"d":"M19.5 14.5l-5 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,8],[17,17]]}];

export const PillsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PillsIcon.displayName = "PillsIcon";
