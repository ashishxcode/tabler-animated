"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4.28 14h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243"}],["path",{"d":"M4 10h16"}],["path",{"d":"M10 6l-1 8"}],["path",{"d":"M14 6l1 8"}],["path",{"d":"M12 14v4"}],["path",{"d":"M7 18h10"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,10],"a":0.06},{"fx":"pop","n":[2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[9.5,10],[14.5,10],[12,16],[12,18]]}];

export const SolarPanelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SolarPanelIcon.displayName = "SolarPanelIcon";
