"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 11h16"}],["path",{"d":"M12 6.5c0 1 -5 4.5 -8 4.5"}],["path",{"d":"M12 6.5c0 1 5 4.5 8 4.5"}],["path",{"d":"M6 11c-.333 5.333 -1 8.667 -2 10h4c1 0 4 -4 4 -9v-1"}],["path",{"d":"M18 11c.333 5.333 1 8.667 2 10h-4c-1 0 -4 -4 -4 -9v-1"}],["path",{"d":"M12 7v-4l2 1h-2"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5],"o":[12,21],"d":[0,-1.8]}];

export const BuildingCircusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingCircusIcon.displayName = "BuildingCircusIcon";
