"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7.5 16.5l9 -9"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,18],[18,6]]}];

export const LineIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LineIcon.displayName = "LineIcon";
