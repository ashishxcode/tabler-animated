"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13.08 20.162l-3.08 -6.162l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-2.55 7.063"}],["path",{"d":"M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"}],["path",{"d":"M19 21v1m0 -8v1"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[19,18],"a":0.35,"dl":0.2},{"fx":"hop","n":[0],"o":[11.84,20.16],"d":[0,-2.2]}];

export const LocationDollarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LocationDollarIcon.displayName = "LocationDollarIcon";
