"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 2l0 20"}],["path",{"d":"M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"}],["path",{"d":"M20 6a2 2 0 0 0 -2 -2"}],["path",{"d":"M18 20a2 2 0 0 0 2 -2"}],["path",{"d":"M20 10l0 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[9,12],"a":0.06},{"fx":"pop","n":[2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[19,5],[19,19],[20,12]]}];

export const SquareToggleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SquareToggleIcon.displayName = "SquareToggleIcon";
