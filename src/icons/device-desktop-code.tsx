"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8"}],["path",{"d":"M7 20h4"}],["path",{"d":"M9 16v4"}],["path",{"d":"M20 21l2 -2l-2 -2"}],["path",{"d":"M17 17l-2 2l2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[18.5,19],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,10],"a":0.06},{"fx":"pop","n":[1,2],"a":0.22,"dl":0.1,"st":0.07,"os":[[9,20],[9,18]]}];

export const DeviceDesktopCodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceDesktopCodeIcon.displayName = "DeviceDesktopCodeIcon";
