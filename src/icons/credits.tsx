"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 14a6 2 0 1 0 12 0a6 2 0 1 0 -12 0"}],["path",{"d":"M3 14v5c0 1.105 2.686 2 6 2s6 -.895 6 -2v-5"}],["path",{"d":"M9 5a6 2 0 1 0 12 0a6 2 0 1 0 -12 0"}],["path",{"d":"M9 5v3"}],["path",{"d":"M18.365 11.656c1.59 -.36 2.635 -.966 2.635 -1.656v-5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.06},{"fx":"pop","n":[3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[9,6.5],[19.68,8.33]]}];

export const CreditsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CreditsIcon.displayName = "CreditsIcon";
