"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"}],["path",{"d":"M6.36 5a2 2 0 0 1 1.962 1.608l.356 1.784a2 2 0 0 0 1.962 1.608h8.36a2 2 0 0 1 2 2"}],["path",{"d":"M12.36 5a2 2 0 0 1 1.962 1.608l.356 1.784a2 2 0 0 0 1.962 1.608"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[13.68,8.5],[14.5,7.5]]}];

export const TabsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TabsIcon.displayName = "TabsIcon";
