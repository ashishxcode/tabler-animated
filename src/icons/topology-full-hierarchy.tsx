"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M6 8v8"}],["path",{"d":"M18 16v-8"}],["path",{"d":"M8 6h8"}],["path",{"d":"M16 18h-8"}],["path",{"d":"M7.5 7.5l3 3"}],["path",{"d":"M13.5 13.5l3 3"}],["path",{"d":"M16.5 7.5l-3 3"}],["path",{"d":"M10.5 13.5l-3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[5,6,7,8],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,9,10,11,12],"a":0.24,"dl":0.1,"st":0.07,"os":[[18,18],[6,18],[6,6],[18,6],[12,12],[9,9],[15,15],[15,9],[9,15]]}];

export const TopologyFullHierarchyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TopologyFullHierarchyIcon.displayName = "TopologyFullHierarchyIcon";
