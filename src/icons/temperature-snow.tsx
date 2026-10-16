"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5"}],["path",{"d":"M4 9h4"}],["path",{"d":"M14.75 4l1 2h2.25"}],["path",{"d":"M17 4l-3 5l2 3"}],["path",{"d":"M20.25 10l-1.25 2l1.25 2"}],["path",{"d":"M22 12h-6l-2 3"}],["path",{"d":"M18 18h-2.25l-1 2"}],["path",{"d":"M17 20l-3 -5h-1"}],["path",{"d":"M12 9l2.088 .008"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7,8],"o":[12,20.96],"a":0.1}];

export const TemperatureSnowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TemperatureSnowIcon.displayName = "TemperatureSnowIcon";
