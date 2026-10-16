"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.095 8.095 0 0 0 -8.019 3.918"}],["path",{"d":"M4 13a8.1 8.1 0 0 0 15 3"}],["path",{"d":"M18 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M4 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[19,16],[5,8],[12,12]]}];

export const AnalyzeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AnalyzeIcon.displayName = "AnalyzeIcon";
