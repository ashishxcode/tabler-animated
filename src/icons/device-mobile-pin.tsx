"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6"}],["path",{"d":"M11 4h2"}],["path",{"d":"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879"}],["path",{"d":"M19 18v.01"}],["path",{"d":"M12 17v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[19,18.5],"a":0.35,"dl":0.2},{"fx":"hop","n":[0,1,4],"o":[12,21],"d":[0,-2.2]}];

export const DeviceMobilePinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceMobilePinIcon.displayName = "DeviceMobilePinIcon";
