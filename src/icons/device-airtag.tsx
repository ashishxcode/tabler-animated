"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12a8 8 0 1 0 16 0a8 8 0 0 0 -16 0"}],["path",{"d":"M9 15v.01"}],["path",{"d":"M15 15a6 6 0 0 0 -6 -6"}],["path",{"d":"M12 15a3 3 0 0 0 -3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.22,"dl":0.1,"st":0.07,"os":[[9,15.01],[12,12],[10.5,13.5]]}];

export const DeviceAirtagIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceAirtagIcon.displayName = "DeviceAirtagIcon";
