"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 6h18"}],["path",{"d":"M4 6v13"}],["path",{"d":"M20 19v-13"}],["path",{"d":"M4 10h16"}],["path",{"d":"M15 6v8a2 2 0 0 0 2 2h3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3],"o":[12,8],"a":0.06},{"fx":"pop","n":[1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[4,12.5],[20,12.5],[17.5,11]]}];

export const DeskIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeskIcon.displayName = "DeskIcon";
