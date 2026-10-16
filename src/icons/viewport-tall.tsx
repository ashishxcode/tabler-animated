"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 10v-7l3 3"}],["path",{"d":"M9 6l3 -3"}],["path",{"d":"M12 14v7l3 -3"}],["path",{"d":"M9 18l3 3"}],["path",{"d":"M18 3h1a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-1"}],["path",{"d":"M6 3h-1a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h1"}]];
const rig: Rig[] = [{"fx":"pop","n":[4,5],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[13.5,6.5],[10.5,4.5],[13.5,17.5],[10.5,19.5]]}];

export const ViewportTallIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ViewportTallIcon.displayName = "ViewportTallIcon";
