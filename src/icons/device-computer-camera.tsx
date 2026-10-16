"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M8 16l-2.091 3.486a1 1 0 0 0 .857 1.514h10.468a1 1 0 0 0 .857 -1.514l-2.091 -3.486"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"a":0.25,"st":0.08,"os":[[12,10],[12,18.5]]},{"fx":"tilt","n":[0],"o":[12,10],"a":-3}];

export const DeviceComputerCameraIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceComputerCameraIcon.displayName = "DeviceComputerCameraIcon";
