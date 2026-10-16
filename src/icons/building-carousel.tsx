"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 12a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"}],["path",{"d":"M3 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M8 22l4 -10l4 10"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6],"o":[12,22],"d":[0,-1.8]}];

export const BuildingCarouselIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingCarouselIcon.displayName = "BuildingCarouselIcon";
