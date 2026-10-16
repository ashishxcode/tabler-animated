"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 3c0 2 1 3 4 3c2 0 3 1 3 3"}],["path",{"d":"M21 3c0 2 -1 3 -4 3c-2 0 -3 .333 -3 3"}],["path",{"d":"M12 18c-1 0 -4 -3 -4 -6c0 -2 1.333 -3 4 -3s4 1 4 3c0 3 -3 6 -4 6"}],["path",{"d":"M15.185 14.889l.095 -.18a4 4 0 1 1 -6.56 0"}],["path",{"d":"M17 3c0 1.333 -.333 2.333 -1 3"}],["path",{"d":"M7 3c0 1.333 .333 2.333 1 3"}],["path",{"d":"M7 6c-2.667 .667 -4.333 1.667 -5 3"}],["path",{"d":"M17 6c2.667 .667 4.333 1.667 5 3"}],["path",{"d":"M8.5 10l-1.5 -1"}],["path",{"d":"M15.5 10l1.5 -1"}],["path",{"d":"M12 15h.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[4,5,6,7,8,9,10],"a":0.24,"dl":0.1,"st":0.07,"os":[[16.5,4.5],[7.5,4.5],[4.5,7.5],[19.5,7.5],[7.75,9.5],[16.25,9.5],[12.01,15]]}];

export const DeerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeerIcon.displayName = "DeerIcon";
