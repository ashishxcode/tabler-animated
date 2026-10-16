"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 9l6 6"}],["path",{"d":"M2 15l6 -6"}],["path",{"d":"M16 9l6 6"}],["path",{"d":"M16 15l6 -6"}],["path",{"d":"M10 12h4"}],["path",{"d":"M12 10v4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[12,12]]}];

export const MathXPlusXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathXPlusXIcon.displayName = "MathXPlusXIcon";
