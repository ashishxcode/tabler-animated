"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3v7l3 -3"}],["path",{"d":"M9 7l3 3"}],["path",{"d":"M12 21v-7l3 3"}],["path",{"d":"M9 17l3 -3"}],["path",{"d":"M18 9h1a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-1"}],["path",{"d":"M6 9h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2,4,5],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[10.5,8.5],[10.5,15.5]]}];

export const ViewportShortIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ViewportShortIcon.displayName = "ViewportShortIcon";
