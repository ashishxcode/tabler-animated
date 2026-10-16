"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M2 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M11 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M13 19l-9 0"}],["path",{"d":"M4 15l9 0"}],["path",{"d":"M8 12v-5h2a3 3 0 0 1 3 3v5"}],["path",{"d":"M5 15v-2a1 1 0 0 1 1 -1h7"}],["path",{"d":"M19 11v-7l-6 7"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6,7],"o":[11.5,19],"d":[0,-2.4]}];

export const WreckingBallIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WreckingBallIcon.displayName = "WreckingBallIcon";
