"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M16 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M12 19v-4l-3 -3l5 -4l2 3h3"}],["path",{"d":"M13.007 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12,12],"d":[2.4,0]}];

export const BikeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BikeIcon.displayName = "BikeIcon";
