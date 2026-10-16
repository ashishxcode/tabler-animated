"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 4c0 4.889 -2.292 12.111 -5 17"}],["path",{"d":"M13 4c0 4.889 2.292 12.111 5 17"}],["path",{"d":"M3 21h18"}],["path",{"d":"M8 14h8"}],["path",{"d":"M9 10h6"}],["path",{"d":"M10 4h4"}],["path",{"d":"M12 2v1.778"}],["path",{"d":"M10 21s.27 -1.406 .667 -2c.333 -.5 .666 -1 1.333 -1s1 .5 1.333 1c.448 .672 .667 2 .667 2"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6,7],"o":[12,21],"d":[0,-1.8]}];

export const BuildingEiffelTowerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingEiffelTowerIcon.displayName = "BuildingEiffelTowerIcon";
