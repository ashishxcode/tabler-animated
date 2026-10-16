"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -14"}],["path",{"d":"M8 4l2 0"}],["path",{"d":"M9 17l0 .01"}],["path",{"d":"M21 6l-2 3l2 3l-2 3l2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[9,12],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.22,"dl":0.1,"st":0.07,"os":[[9,4],[9,17.01],[20,12]]}];

export const DeviceMobileVibrationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceMobileVibrationIcon.displayName = "DeviceMobileVibrationIcon";
