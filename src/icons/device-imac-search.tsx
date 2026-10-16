"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 17h-7a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8"}],["path",{"d":"M3 13h10"}],["path",{"d":"M8 21h4"}],["path",{"d":"M10 17l-.5 4"}],["path",{"d":"M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M20.2 20.2l1.8 1.8"}]];
const rig: Rig[] = [{"fx":"pop","n":[4,5],"o":[18.5,18.5],"a":0.35,"dl":0.2},{"fx":"sweep","n":[0,1,2,3],"o":[12,12]}];

export const DeviceImacSearchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceImacSearchIcon.displayName = "DeviceImacSearchIcon";
