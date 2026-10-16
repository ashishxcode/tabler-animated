"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21v-1a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v1"}],["path",{"d":"M6 15a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2"}],["path",{"d":"M15 6l-3 3l-3 -3"}],["path",{"d":"M12 9v-6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,19.5],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,14],[12,7.5],[12,6]]}];

export const TabCloseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TabCloseIcon.displayName = "TabCloseIcon";
