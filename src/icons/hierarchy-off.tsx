"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17.585 17.587a2 2 0 0 0 2.813 2.843"}],["path",{"d":"M6.5 17.5l5.5 -4.5l5.5 4.5"}],["path",{"d":"M12 7v1m0 4v1"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[18.71,19.29],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[5,19],[12,15.25],[12,10]]}];

export const HierarchyOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HierarchyOffIcon.displayName = "HierarchyOffIcon";
