"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 15a6 6 0 1 0 12 0"}],["path",{"d":"M18 15a6 6 0 0 0 -6 6"}],["path",{"d":"M12 21a6 6 0 0 0 -6 -6"}],["path",{"d":"M12 21v-10"}],["path",{"d":"M12 11a5 5 0 0 1 -5 -5v-3l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -5 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,4],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[15,18],[9,18],[12,16]]}];

export const MacroIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MacroIcon.displayName = "MacroIcon";
