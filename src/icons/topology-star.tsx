"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M7.5 7.5l3 3"}],["path",{"d":"M7.5 16.5l3 -3"}],["path",{"d":"M13.5 13.5l3 3"}],["path",{"d":"M16.5 7.5l-3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[7],"o":[15,15],"a":0.35,"dl":0.2},{"fx":"twinkle","n":[0,1,2,3,4,5,6,8],"o":[12,12]}];

export const TopologyStarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TopologyStarIcon.displayName = "TopologyStarIcon";
