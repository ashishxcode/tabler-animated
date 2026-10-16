"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 10a5 5 0 0 0 -10 0"}],["path",{"d":"M6 11a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1l0 -1"}],["path",{"d":"M7 13l1.81 7.243a1 1 0 0 0 .97 .757h4.44a1 1 0 0 0 .97 -.757l1.81 -7.243"}],["path",{"d":"M12 5v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,13],"a":0.06},{"fx":"pop","n":[3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,4]]}];

export const MilkshakeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MilkshakeIcon.displayName = "MilkshakeIcon";
