"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 13h2a2 2 0 0 1 2 2v2m-.588 3.417c-.362 .36 -.861 .583 -1.412 .583h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h8"}],["path",{"d":"M17 17v.01"}],["path",{"d":"M13 17v.01"}],["path",{"d":"M12.226 8.2a4 4 0 0 1 6.024 .55"}],["path",{"d":"M9.445 5.407a8 8 0 0 1 12.055 1.093"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1,2],"o":[15,17.01],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,17],"a":0.06},{"fx":"pop","n":[3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[15.24,7.92],[15.47,4.83]]}];

export const RouterOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RouterOffIcon.displayName = "RouterOffIcon";
