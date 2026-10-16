"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 15.464a4 4 0 1 0 4 -6.928a4 4 0 0 0 -4 6.928"}],["path",{"d":"M15.464 14l3 -5.196"}],["path",{"d":"M5.536 15.195l3 -5.196"}],["path",{"d":"M12 12h.01"}],["path",{"d":"M9 9l-6 -6"}],["path",{"d":"M5.5 8.5l3 -3"}],["path",{"d":"M21 21l-6 -6"}],["path",{"d":"M17 20l3 -3"}],["path",{"d":"M3 7v-4h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.02,12.01],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[16.96,11.4],[7.04,12.6],[12.01,12],[6,6],[7,7],[18,18],[18.5,18.5],[5,5]]}];

export const GenderGenderfluidIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GenderGenderfluidIcon.displayName = "GenderGenderfluidIcon";
