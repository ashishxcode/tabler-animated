"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14"}],["path",{"d":"M11.114 11.133a3 3 0 1 0 3.754 3.751"}],["path",{"d":"M12 7v.01"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.22,"dl":0.1,"st":0.07,"os":[[11.93,14.07],[12,7.01]]}];

export const DeviceSpeakerOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceSpeakerOffIcon.displayName = "DeviceSpeakerOffIcon";
