"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 20h6"}],["path",{"d":"M12 14v6"}],["path",{"d":"M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -6"}],["path",{"d":"M9 9h6"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,9],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,20],[12,17],[12,9]]}];

export const ReservedLineIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ReservedLineIcon.displayName = "ReservedLineIcon";
