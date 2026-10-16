"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 14h-4v-4"}],["path",{"d":"M10 10l-3.5 -3.5"}],["path",{"d":"M9.957 5.95a3.503 3.503 0 0 0 -2.917 -2.91m-3.02 .989a3.5 3.5 0 0 0 1.98 5.936"}],["path",{"d":"M14 10l3.5 -3.5"}],["path",{"d":"M18 9.965a3.5 3.5 0 1 0 -3.966 -3.965"}],["path",{"d":"M14 14l3.5 3.5"}],["path",{"d":"M14.035 18a3.5 3.5 0 0 0 5.936 1.98m.987 -3.026a3.503 3.503 0 0 0 -2.918 -2.913"}],["path",{"d":"M10 14l-3.5 3.5"}],["path",{"d":"M6 14.035a3.5 3.5 0 1 0 3.966 3.965"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[9],"o":[12,12],"dl":0.25},{"fx":"pop","n":[5],"o":[15.75,15.75],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3,4,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[8.25,8.25],[6.48,6.5],[15.75,8.25],[17.52,6.48],[17.5,17.52],[8.25,15.75],[6.48,17.52]]}];

export const DroneOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DroneOffIcon.displayName = "DroneOffIcon";
