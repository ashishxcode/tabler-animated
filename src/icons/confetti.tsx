"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 5h2"}],["path",{"d":"M5 4v2"}],["path",{"d":"M11.5 4l-.5 2"}],["path",{"d":"M18 5h2"}],["path",{"d":"M19 4v2"}],["path",{"d":"M15 9l-1 1"}],["path",{"d":"M18 13l2 -.5"}],["path",{"d":"M18 19h2"}],["path",{"d":"M19 18v2"}],["path",{"d":"M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39"}]];
const rig: Rig[] = [{"fx":"pop","n":[9],"o":[8.5,15.5],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,5],[5,5],[11.25,5],[19,5],[19,5],[14.5,9.5],[19,12.75],[19,19],[19,19]]}];

export const ConfettiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ConfettiIcon.displayName = "ConfettiIcon";
