"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 5h1"}],["path",{"d":"M5 5v1"}],["path",{"d":"M11.5 4l-.5 2"}],["path",{"d":"M18 5h2"}],["path",{"d":"M19 4v2"}],["path",{"d":"M15 9l-1 1"}],["path",{"d":"M18 13l2 -.5"}],["path",{"d":"M18 19h1"}],["path",{"d":"M19 19v1"}],["path",{"d":"M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[10],"o":[12,12],"dl":0.25},{"fx":"pop","n":[6,7,8],"o":[19,16.25],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3,4,5,9],"a":0.24,"dl":0.1,"st":0.07,"os":[[4.5,5],[5,5.5],[11.25,5],[19,5],[19,5],[14.5,9.5],[8.5,15.5]]}];

export const ConfettiOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ConfettiOffIcon.displayName = "ConfettiOffIcon";
