"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9.173 14.83a4 4 0 1 1 5.657 -5.657"}],["path",{"d":"M11.294 12.707l.174 .247a7.5 7.5 0 0 0 8.845 2.492a9 9 0 0 1 -14.671 2.914"}],["path",{"d":"M3 12h1"}],["path",{"d":"M12 3v1"}],["path",{"d":"M5.6 5.6l.7 .7"}],["path",{"d":"M3 21l18 -18"}]];
const rig: Rig[] = [{"fx":"pop","n":[5],"o":[12,12],"a":0.1},{"fx":"spin","n":[0,1,2,3,4],"o":[11.66,12],"a":45,"sym":true}];

export const SunMoonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SunMoonIcon.displayName = "SunMoonIcon";
