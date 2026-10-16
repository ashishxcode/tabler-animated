"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 14a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M8 13l0 4"}],["path",{"d":"M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,15],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,15],[18,7.5]]}];

export const SmokingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SmokingIcon.displayName = "SmokingIcon";
