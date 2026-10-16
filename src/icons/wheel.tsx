"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M3 12h6"}],["path",{"d":"M15 12h6"}],["path",{"d":"M13.6 9.4l3.4 -4.8"}],["path",{"d":"M10.4 14.6l-3.4 4.8"}],["path",{"d":"M7 4.6l3.4 4.8"}],["path",{"d":"M13.6 14.6l3.4 4.8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[6,12],[18,12],[15.3,7],[8.7,17],[8.7,7],[15.3,17]]}];

export const WheelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WheelIcon.displayName = "WheelIcon";
