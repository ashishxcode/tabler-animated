"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 19.5l-5 -2.5l-6 3v-13l6 -3l6 3l6 -3v9"}],["path",{"d":"M9 4v13"}],["path",{"d":"M15 7v6.5"}],["path",{"d":"M22 22l-5 -5"}],["path",{"d":"M17 22l5 -5"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4],"o":[19.5,19.5],"dl":0.2,"st":0.08},{"fx":"hop","n":[0,1,2],"o":[12,20],"d":[0,-2.2]}];

export const MapXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapXIcon.displayName = "MapXIcon";
