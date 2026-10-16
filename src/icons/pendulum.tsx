"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 19a2 2 0 1 1 4 0a2 2 0 0 1 -4 0"}],["path",{"d":"M12 3l-4.4 14.09"}],["path",{"d":"M19 3h-14"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[12,10.05],"a":0.06},{"fx":"pop","n":[0],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,19]]}];

export const PendulumIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PendulumIcon.displayName = "PendulumIcon";
