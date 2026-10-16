"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 17h14.4a3 3 0 0 0 2.5 -1.34l3.1 -4.66h-6.23a4 4 0 0 0 -1.49 .29l-3.56 1.42a4 4 0 0 1 -1.49 .29h-5.73l-1.5 4"}],["path",{"d":"M6 13l1.5 -5"}],["path",{"d":"M6 8h8l2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,14],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[6.75,10.5],[11,9.5]]}];

export const SpeedboatIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SpeedboatIcon.displayName = "SpeedboatIcon";
