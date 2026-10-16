"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 19v-10a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3.5"}],["path",{"d":"M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9"}],["path",{"d":"M19 16l-2 3h4l-2 3"}],["path",{"d":"M16 9h2"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[19,19],"a":0.35,"dl":0.2},{"fx":"flash","n":[0,1,3],"o":[12,11.5]}];

export const DevicesBoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DevicesBoltIcon.displayName = "DevicesBoltIcon";
