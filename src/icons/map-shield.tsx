"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 11a3 3 0 1 0 -3 3"}],["path",{"d":"M12.249 21.47a2 2 0 0 1 -1.662 -.57l-4.244 -4.243a8 8 0 1 1 13.655 -5.828"}],["path",{"d":"M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12.24],"a":0.08},{"fx":"draw","n":[0,2],"o":[15.5,15],"dl":0.15}];

export const MapShieldIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapShieldIcon.displayName = "MapShieldIcon";
