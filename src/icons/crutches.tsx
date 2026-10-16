"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2"}],["path",{"d":"M11 21h2"}],["path",{"d":"M12 21v-4.092a3 3 0 0 1 .504 -1.664l.992 -1.488a3 3 0 0 0 .504 -1.664v-5.092"}],["path",{"d":"M12 21v-4.092a3 3 0 0 0 -.504 -1.664l-.992 -1.488a3 3 0 0 1 -.504 -1.664v-5.092"}],["path",{"d":"M10 11h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[12,14],"a":0.06},{"fx":"pop","n":[0,1,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[12,21],[12,11]]}];

export const CrutchesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CrutchesIcon.displayName = "CrutchesIcon";
