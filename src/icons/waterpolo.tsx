"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 8l3 4l5 1l7 -1"}],["path",{"d":"M3 18.75a2.4 2.4 0 0 0 1 .25a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 1 -.25"}],["path",{"d":"M12 16l1 -3"}],["path",{"d":"M11.007 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5.007 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,13.5],"a":0.06},{"fx":"pop","n":[2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12.5,14.5],[13.01,9],[6.51,3.5]]}];

export const WaterpoloIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WaterpoloIcon.displayName = "WaterpoloIcon";
