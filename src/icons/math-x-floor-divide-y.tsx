"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M1.5 19l18 -18"}],["path",{"d":"M4.5 22l18 -18"}],["path",{"d":"M18 15l3 4"}],["path",{"d":"M23 15l-4.5 8"}],["path",{"d":"M1 1l6 6"}],["path",{"d":"M1 7l6 -6"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3],"o":[20.5,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[0,1],"o":[12,11.5],"a":0.06},{"fx":"pop","n":[4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[4,4],[4,4]]}];

export const MathXFloorDivideYIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathXFloorDivideYIcon.displayName = "MathXFloorDivideYIcon";
