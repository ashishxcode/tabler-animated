"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11.5 21h-5.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9.5"}],["path",{"d":"M12.314 16.05a1 1 0 0 0 -1.042 1.635"}],["path",{"d":"M15 19l2 2l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[18,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1],"a":0.22,"dl":0.1,"st":0.07,"os":[[11.66,16.84]]}];

export const DeviceTabletCheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceTabletCheckIcon.displayName = "DeviceTabletCheckIcon";
