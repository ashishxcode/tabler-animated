"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 7a2 2 0 1 1 0 -4a2 2 0 0 1 0 4"}],["path",{"d":"M17 5h-9.5a3.5 3.5 0 0 0 0 7h9a3.5 3.5 0 0 1 0 7h-13.5"}],["path",{"d":"M6 16l-3 3l3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[11.5,12],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[19,5],[4.5,19]]}];

export const STurnLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
STurnLeftIcon.displayName = "STurnLeftIcon";
