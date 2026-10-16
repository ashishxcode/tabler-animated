"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 19a2 2 0 0 1 -2 -2"}],["path",{"d":"M5 13v-2"}],["path",{"d":"M5 7a2 2 0 0 1 2 -2"}],["path",{"d":"M11 5h2"}],["path",{"d":"M17 5a2 2 0 0 1 2 2"}],["path",{"d":"M19 11v2"}],["path",{"d":"M19 17v4"}],["path",{"d":"M21 19h-4"}],["path",{"d":"M13 19h-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[6,7],"o":[19,19],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,18],[5,12],[6,6],[12,5],[18,6],[19,12],[12,19]]}];

export const ScreenshotIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ScreenshotIcon.displayName = "ScreenshotIcon";
