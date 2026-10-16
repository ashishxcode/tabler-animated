"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M22 12h-5"}],["path",{"d":"M2 9h5"}],["path",{"d":"M2 15h5"}],["path",{"d":"M9 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[19.5,12],[4.5,9],[4.5,15]]}];

export const LogicAndIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LogicAndIcon.displayName = "LogicAndIcon";
