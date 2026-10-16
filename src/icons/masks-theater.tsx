"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13.192 9h6.616a2 2 0 0 1 1.992 2.183l-.567 6.182a4 4 0 0 1 -3.983 3.635h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182a2 2 0 0 1 1.992 -2.183"}],["path",{"d":"M15 13h.01"}],["path",{"d":"M18 13h.01"}],["path",{"d":"M15 16.5c1 .667 2 .667 3 0"}],["path",{"d":"M8.632 15.982a4.037 4.037 0 0 1 -.382 .018h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182a2 2 0 0 1 1.992 -2.183h6.616a2 2 0 0 1 2 2"}],["path",{"d":"M6 8h.01"}],["path",{"d":"M9 8h.01"}],["path",{"d":"M6 12c.764 -.51 1.528 -.63 2.291 -.36"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,4],"o":[12,12.5],"a":0.06},{"fx":"pop","n":[1,2,3,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[15.01,13],[18.01,13],[16.5,16.75],[6.01,8],[9,8],[7.15,11.75]]}];

export const MasksTheaterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MasksTheaterIcon.displayName = "MasksTheaterIcon";
