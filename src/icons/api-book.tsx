"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"}],["path",{"d":"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"}],["path",{"d":"M3 6v13"}],["path",{"d":"M12 6v13"}],["path",{"d":"M21 6v6"}],["path",{"d":"M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M19.001 15.5v1.5"}],["path",{"d":"M19.001 21v1.5"}],["path",{"d":"M22.032 17.25l-1.299 .75"}],["path",{"d":"M17.27 20l-1.3 .75"}],["path",{"d":"M15.97 17.25l1.3 .75"}],["path",{"d":"M20.733 20l1.3 .75"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,2,3],"o":[8,12.5],"dl":0.05,"st":0.07},{"fx":"draw","n":[4,5,6,7,8,9,10,11],"o":[19,14.25],"dl":0.2},{"fx":"pop","n":[1],"o":[12,5.4],"a":0.04}];

export const ApiBookIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ApiBookIcon.displayName = "ApiBookIcon";
