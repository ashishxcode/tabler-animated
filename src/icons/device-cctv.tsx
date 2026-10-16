"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M8 14a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M19 7v7a7 7 0 0 1 -14 0v-7"}],["path",{"d":"M12 14l.01 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,3],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,14],[12.01,14]]}];

export const DeviceCctvIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceCctvIcon.displayName = "DeviceCctvIcon";
