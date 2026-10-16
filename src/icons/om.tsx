"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 12c2.21 0 4 -1.567 4 -3.5s-1.79 -3.5 -4 -3.5c-1.594 0 -2.97 .816 -3.613 2"}],["path",{"d":"M3.423 14.483a4.944 4.944 0 0 0 -.423 2.017c0 2.485 1.79 4.5 4 4.5s4 -2.015 4 -4.5s-1.79 -4.5 -4 -4.5"}],["path",{"d":"M14.071 17.01c.327 2.277 1.739 3.99 3.429 3.99c1.933 0 3.5 -2.239 3.5 -5s-1.567 -5 -3.5 -5c-.96 0 -1.868 .606 -2.5 1.5c-.717 1.049 -1.76 1.7 -2.936 1.7c-.92 0 -1.766 -.406 -2.434 -1.087"}],["path",{"d":"M17 3l2 2"}],["path",{"d":"M12 3c1.667 3.667 4.667 5.333 9 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[12,16],"a":0.06},{"fx":"pop","n":[0,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[7.19,8.5],[18,4],[16.5,5.52]]}];

export const OmIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
OmIcon.displayName = "OmIcon";
