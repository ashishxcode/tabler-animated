"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 12a3 3 0 1 0 3 3"}],["path",{"d":"M11 7h3"}],["path",{"d":"M10 18v4l2 -1l2 1v-4"}],["path",{"d":"M10 19h-2a2 2 0 0 1 -2 -2v-11m1.18 -2.825c.25 -.112 .529 -.175 .82 -.175h8a2 2 0 0 1 2 2v9m-.175 3.82a2 2 0 0 1 -1.825 1.18h-2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"draw","n":[0],"o":[12,15],"dl":0.05,"st":0.07},{"fx":"draw","n":[1,2],"o":[12,14.5],"dl":0.2},{"fx":"pop","n":[3],"o":[12,11],"a":0.04}];

export const Certificate2OffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Certificate2OffIcon.displayName = "Certificate2OffIcon";
