"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4"}],["path",{"d":"M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 5h7c2.761 0 5 3.134 5 7v5h-2"}],["path",{"d":"M16 17h-8"}],["path",{"d":"M16 5l1.5 7h4.5"}],["path",{"d":"M9.5 10h7.5"}],["path",{"d":"M12 5v5"}],["path",{"d":"M5 9v11"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5,6,7],"o":[12.5,11.5],"d":[2.4,0]}];

export const BusStopIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BusStopIcon.displayName = "BusStopIcon";
