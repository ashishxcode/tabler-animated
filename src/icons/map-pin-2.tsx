"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7"}],["path",{"d":"M9 4v13"}],["path",{"d":"M15 7v5"}],["path",{"d":"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879"}],["path",{"d":"M19 18v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[19,18.5],"a":0.35,"dl":0.2},{"fx":"hop","n":[0,1,2],"o":[12,20],"d":[0,-2.2]}];

export const MapPin2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapPin2Icon.displayName = "MapPin2Icon";
