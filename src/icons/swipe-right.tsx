"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12a4 4 0 1 1 8 0a4 4 0 0 1 -8 0"}],["path",{"d":"M12 12h8"}],["path",{"d":"M17 15l3 -3l-3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[8,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[16,12],[18.5,12]]}];

export const SwipeRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SwipeRightIcon.displayName = "SwipeRightIcon";
