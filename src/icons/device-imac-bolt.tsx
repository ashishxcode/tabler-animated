"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13.5 17h-9.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5"}],["path",{"d":"M3 13h13"}],["path",{"d":"M8 21h5.5"}],["path",{"d":"M10 17l-.5 4"}],["path",{"d":"M19 16l-2 3h4l-2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[19,19],"a":0.35,"dl":0.2},{"fx":"flash","n":[0,1,2,3],"o":[12,12]}];

export const DeviceImacBoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceImacBoltIcon.displayName = "DeviceImacBoltIcon";
