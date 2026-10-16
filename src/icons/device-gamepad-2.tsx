"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4"}],["path",{"d":"M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232"}],["path",{"d":"M8 9v2"}],["path",{"d":"M7 10h2"}],["path",{"d":"M14 10h2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.26,12.47],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.22,"dl":0.1,"st":0.07,"os":[[18.02,14.51],[8,10],[8,10],[15,10]]}];

export const DeviceGamepad2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceGamepad2Icon.displayName = "DeviceGamepad2Icon";
