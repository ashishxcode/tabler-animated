"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 14v7"}],["path",{"d":"M9 18h6"}],["path",{"d":"M12 6a4 4 0 1 1 0 8a4 4 0 0 1 0 -8"}],["path",{"d":"M15 3a3 3 0 1 1 -6 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,10],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,17.5],[12,18],[12,4.5]]}];

export const GenderHermaphroditeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GenderHermaphroditeIcon.displayName = "GenderHermaphroditeIcon";
