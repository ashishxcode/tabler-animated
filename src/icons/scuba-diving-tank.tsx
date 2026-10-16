"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 11a4 4 0 1 1 8 0v5h-8l0 -5"}],["path",{"d":"M8 16v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-3"}],["path",{"d":"M9 4h6"}],["path",{"d":"M12 7v-3"}],["path",{"d":"M7 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11.5 4a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0","fill":"currentColor"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,14],"a":0.06},{"fx":"pop","n":[2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,4],[12,5.5],[8,4],[12,4]]}];

export const ScubaDivingTankIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ScubaDivingTankIcon.displayName = "ScubaDivingTankIcon";
