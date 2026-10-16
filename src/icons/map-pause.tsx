"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v9"}],["path",{"d":"M9 4v13"}],["path",{"d":"M15 7v6.5"}],["path",{"d":"M17 17v5"}],["path",{"d":"M21 17v5"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[19,19.5],"a":0.35,"dl":0.2},{"fx":"hop","n":[0,1,2],"o":[12,20],"d":[0,-2.2]}];

export const MapPauseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapPauseIcon.displayName = "MapPauseIcon";
