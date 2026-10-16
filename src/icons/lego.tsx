"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9.5 11l.01 0"}],["path",{"d":"M14.5 11l.01 0"}],["path",{"d":"M9.5 15a3.5 3.5 0 0 0 5 0"}],["path",{"d":"M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[9.5,11],[14.51,11],[12,15.53]]}];

export const LegoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LegoIcon.displayName = "LegoIcon";
