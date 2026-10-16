"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M18 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M4 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M18 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2,3,4,5,6,7,8],"st":0.06,"os":[[5,5],[12,5],[19,5],[5,12],[12,12],[19,12],[5,19],[12,19],[19,19]]}];

export const GridDotsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GridDotsIcon.displayName = "GridDotsIcon";
