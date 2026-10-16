"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14.5 16h-10.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5"}],["path",{"d":"M7 20h6"}],["path",{"d":"M9 16v4"}],["path",{"d":"M19 16l-2 3h4l-2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[19,19],"a":0.35,"dl":0.2},{"fx":"flash","n":[0,1,2],"o":[12,12]}];

export const DeviceDesktopBoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceDesktopBoltIcon.displayName = "DeviceDesktopBoltIcon";
