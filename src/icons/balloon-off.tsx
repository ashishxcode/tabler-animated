"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 8a2 2 0 0 0 -2 -2"}],["path",{"d":"M7.762 3.753a6 6 0 0 1 10.238 4.247c0 1.847 -.37 3.564 -1.007 4.993m-1.59 2.42c-.967 1 -2.14 1.587 -3.403 1.587c-3.314 0 -6 -4.03 -6 -9c0 -.593 .086 -1.166 .246 -1.707"}],["path",{"d":"M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[12,9.5],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[13,7],[8.5,19.5]]}];

export const BalloonOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BalloonOffIcon.displayName = "BalloonOffIcon";
