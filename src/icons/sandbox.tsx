"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19.953 8.017l1.047 6.983v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2l1.245 -8.297a2 2 0 0 1 1.977 -1.703h3.778"}],["path",{"d":"M3 15h18"}],["path",{"d":"M13 3l5.5 1.5"}],["path",{"d":"M15.75 3.75l-2 7"}],["path",{"d":"M7 10.5c1.667 -.667 3.333 -.667 5 0c1.667 .667 3.333 .667 5 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12.5],"a":0.06},{"fx":"pop","n":[2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[15.75,3.75],[14.75,7.25],[12,10.5]]}];

export const SandboxIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SandboxIcon.displayName = "SandboxIcon";
