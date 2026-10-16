"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M2 5h2.5l1.632 4.897a6 6 0 0 0 5.693 4.103h2.675a5.5 5.5 0 0 0 0 -11h-.5v6"}],["path",{"d":"M6 9h14"}],["path",{"d":"M9 17l1 -3"}],["path",{"d":"M16 14l1 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[11,8.5],"a":0.06},{"fx":"pop","n":[0,1,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,19],[18,19],[13,9],[9.5,15.5],[16.5,15.5]]}];

export const BabyCarriageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BabyCarriageIcon.displayName = "BabyCarriageIcon";
