"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.972 11.291a9 9 0 1 0 -8.322 9.686"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h8.9"}],["path",{"d":"M11.5 3a17 17 0 0 0 0 18"}],["path",{"d":"M12.5 3a16.986 16.986 0 0 1 2.578 9.018"}],["path",{"d":"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879"}],["path",{"d":"M19 18v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[5,6],"o":[19,18.5],"a":0.35,"dl":0.2},{"fx":"hop","n":[0,1,2,3,4],"o":[11.99,21],"d":[0,-2.2]}];

export const WorldPinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WorldPinIcon.displayName = "WorldPinIcon";
