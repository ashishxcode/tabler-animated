"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6.5 17.5l5.5 -4.5l5.5 4.5"}],["path",{"d":"M12 7l0 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,15.25],"a":0.06},{"fx":"pop","n":[0,1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[5,19],[19,19],[12,10]]}];

export const HierarchyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HierarchyIcon.displayName = "HierarchyIcon";
