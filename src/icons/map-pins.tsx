"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829"}],["path",{"d":"M8 7l0 .01"}],["path",{"d":"M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829"}],["path",{"d":"M16 15l0 .01"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[12,20.66],"d":[0,-2.2]}];

export const MapPinsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapPinsIcon.displayName = "MapPinsIcon";
