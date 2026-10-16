"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M12 19h4.5c.71 0 1.372 -.212 1.924 -.576m1.545 -2.459a3.5 3.5 0 0 0 -3.469 -3.965h-.499m-4 0h-3.501a3.5 3.5 0 0 1 -2.477 -5.972m2.477 -1.028h3.5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"draw","n":[0,1,2],"o":[12,12],"st":0.1}];

export const RouteOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RouteOffIcon.displayName = "RouteOffIcon";
