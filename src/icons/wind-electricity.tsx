"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 7l-3 5h4l-3 5"}],["path",{"d":"M3 16h4a2 2 0 1 1 0 4"}],["path",{"d":"M3 12h8a2 2 0 1 0 0 -4"}],["path",{"d":"M3 8h3a2 2 0 1 0 0 -4"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12,12],"d":[2.4,0],"st":0.1}];

export const WindElectricityIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WindElectricityIcon.displayName = "WindElectricityIcon";
