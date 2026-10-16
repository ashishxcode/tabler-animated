"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19h16"}],["path",{"d":"M15 11h6c0 1.691 -.525 3.26 -1.42 4.552m-2.034 2.032a7.963 7.963 0 0 1 -4.546 1.416h-2a8 8 0 0 1 -8 -8h8"}],["path",{"d":"M12 5v3"}],["path",{"d":"M15 5v3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[12,15],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[11,19],[12,6.5],[15,6.5]]}];

export const SoupOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SoupOffIcon.displayName = "SoupOffIcon";
