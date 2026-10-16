"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 5h9.5a3.5 3.5 0 0 1 0 7h-9a3.5 3.5 0 0 0 0 7h13.5"}],["path",{"d":"M18 16l3 3l-3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12.5,12],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,5],[19.5,19]]}];

export const STurnRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
STurnRightIcon.displayName = "STurnRightIcon";
