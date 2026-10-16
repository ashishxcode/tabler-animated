"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.361 9.308"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"hop","n":[0],"o":[11.84,18],"d":[0,-2.2]}];

export const LocationPlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LocationPlusIcon.displayName = "LocationPlusIcon";
