"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21s10 -16 18 -16"}],["path",{"d":"M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0"}],["path",{"d":"M7 5h2"}],["path",{"d":"M14 5h-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,13],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,5],[8,5],[13,5]]}];

export const EaseOutControlPointIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EaseOutControlPointIcon.displayName = "EaseOutControlPointIcon";
