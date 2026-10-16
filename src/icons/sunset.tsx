"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0"}],["path",{"d":"M3 21l18 0"}],["path",{"d":"M12 3v6l3 -3m-6 0l3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,15.8],"a":0.1},{"fx":"spin","n":[2],"o":[12,6],"a":45,"sym":true}];

export const SunsetIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SunsetIcon.displayName = "SunsetIcon";
