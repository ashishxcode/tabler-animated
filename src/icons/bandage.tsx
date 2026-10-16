"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 12l0 .01"}],["path",{"d":"M10 12l0 .01"}],["path",{"d":"M12 10l0 .01"}],["path",{"d":"M12 14l0 .01"}],["path",{"d":"M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[14,12.01],[10,12.01],[12,10],[12,14.01]]}];

export const BandageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BandageIcon.displayName = "BandageIcon";
