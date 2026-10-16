"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 21h-4"}],["path",{"d":"M14 21v-18"}],["path",{"d":"M14 4l-9 4l9 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[14,12],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[14,21],[9.5,8]]}];

export const Pennant2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Pennant2Icon.displayName = "Pennant2Icon";
