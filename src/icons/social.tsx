"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M9 14a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M12 7l0 4"}],["path",{"d":"M6.7 17.8l2.8 -2"}],["path",{"d":"M17.3 17.8l-2.8 -2"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,14],"a":0.06},{"fx":"pop","n":[0,1,2,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[5,19],[19,19],[12,9],[8.1,16.8],[15.9,16.8]]}];

export const SocialIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SocialIcon.displayName = "SocialIcon";
