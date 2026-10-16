"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M6 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M16 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M13.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M13.5 18.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8.5 18.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3.5 18.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M18.5 18.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7,8,9],"o":[12,11.75],"a":0.06}];

export const AiAgentIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AiAgentIcon.displayName = "AiAgentIcon";
