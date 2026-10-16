"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 12a4 4 0 1 0 -8 0a4 4 0 0 0 8 0"}],["path",{"d":"M12 12h-8"}],["path",{"d":"M7 15l-3 -3l3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[16,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,12],[5.5,12]]}];

export const SwipeLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SwipeLeftIcon.displayName = "SwipeLeftIcon";
