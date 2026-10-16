"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6 5a1 1 0 1 0 -2 0a1 1 0 0 0 2 0"}],["path",{"d":"M18 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M4 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M18 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M11 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.06},{"fx":"pop","n":[3,4,5,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,5],[19,5],[5,12],[12,12],[19,12],[12,19]]}];

export const AiAgentsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AiAgentsIcon.displayName = "AiAgentsIcon";
