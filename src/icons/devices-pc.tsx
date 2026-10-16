"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5h6v14h-6l0 -14"}],["path",{"d":"M12 9h10v7h-10l0 -7"}],["path",{"d":"M14 19h6"}],["path",{"d":"M17 16v3"}],["path",{"d":"M6 13v.01"}],["path",{"d":"M6 16v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12.5,12],"a":0.06},{"fx":"pop","n":[2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,19],[17,17.5],[6,13.01],[6,16.01]]}];

export const DevicesPcIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DevicesPcIcon.displayName = "DevicesPcIcon";
