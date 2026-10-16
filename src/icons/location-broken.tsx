"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.896 19.792l-2.896 -5.792l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.487 9.657"}],["path",{"d":"M21.5 21.5l-5 -5"}],["path",{"d":"M16.5 21.5l5 -5"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2],"o":[12.09,21.5],"d":[0,-2.2]}];

export const LocationBrokenIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LocationBrokenIcon.displayName = "LocationBrokenIcon";
