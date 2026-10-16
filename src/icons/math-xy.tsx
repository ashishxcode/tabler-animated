"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 9l3 5.063"}],["path",{"d":"M4 9l6 6"}],["path",{"d":"M4 15l6 -6"}],["path",{"d":"M20 9l-4.8 9"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2,3],"o":[12,13.5],"a":0.06},{"fx":"pop","n":[0],"a":0.24,"dl":0.1,"st":0.07,"os":[[15.5,11.53]]}];

export const MathXyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathXyIcon.displayName = "MathXyIcon";
