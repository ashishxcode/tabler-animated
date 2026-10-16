"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2"}],["path",{"d":"M3 7v-2a2 2 0 0 1 2 -2h2"}],["path",{"d":"M3 17v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M17 21h2a2 2 0 0 0 2 -2v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,15],"a":0.06},{"fx":"pop","n":[0,2,3,4,5],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,9],[5,5],[5,19],[19,5],[19,19]]}];

export const UserScanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UserScanIcon.displayName = "UserScanIcon";
