"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6.15 6.153a7 7 0 0 0 9.696 9.696m2 -2a7 7 0 0 0 -9.699 -9.695"}],["path",{"d":"M9.13 9.122a3 3 0 0 0 3.743 3.749m2 -2a3 3 0 0 0 -3.737 -3.736"}],["path",{"d":"M8 16l-2.091 3.486a1 1 0 0 0 .857 1.514h10.468a1 1 0 0 0 .857 -1.514l-2.091 -3.486"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1,2],"a":0.25,"st":0.08,"os":[[12,10],[12,18.5]]},{"fx":"tilt","n":[0],"o":[12,10],"a":-3}];

export const DeviceComputerCameraOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceComputerCameraOffIcon.displayName = "DeviceComputerCameraOffIcon";
