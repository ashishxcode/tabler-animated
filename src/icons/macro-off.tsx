"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 15a6 6 0 0 0 11.47 2.467"}],["path",{"d":"M15.53 15.53a6 6 0 0 0 -3.53 5.47"}],["path",{"d":"M12 21a6 6 0 0 0 -6 -6"}],["path",{"d":"M12 21v-10"}],["path",{"d":"M10.866 10.87a5.007 5.007 0 0 1 -3.734 -3.723m-.132 -4.147l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -2.604 4.389"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[13.76,18.27],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.73,18],[9,18],[12,16],[12,6.93]]}];

export const MacroOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MacroOffIcon.displayName = "MacroOffIcon";
