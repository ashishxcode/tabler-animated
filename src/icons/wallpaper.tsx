"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-12"}],["path",{"d":"M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M8 18v-12a2 2 0 1 0 -4 0v12"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[13,13],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,18],[6,11]]}];

export const WallpaperIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WallpaperIcon.displayName = "WallpaperIcon";
