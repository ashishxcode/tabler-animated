"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 3l6 6"}],["path",{"d":"M9 9l6 -6"}],["path",{"d":"M9 15l3 4.5"}],["path",{"d":"M15 15l-4.5 7"}],["path",{"d":"M5 12h14"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12.75,18.5],"dl":0.2,"st":0.08},{"fx":"pop","n":[4],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,6],[12,6],[10.5,17.25]]}];

export const MathXDivideYIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathXDivideYIcon.displayName = "MathXDivideYIcon";
