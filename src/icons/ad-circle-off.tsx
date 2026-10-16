"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4.91 4.949a9.968 9.968 0 0 0 -2.91 7.051c0 5.523 4.477 10 10 10a9.968 9.968 0 0 0 7.05 -2.909"}],["path",{"d":"M20.778 16.793a9.955 9.955 0 0 0 1.222 -4.793c0 -5.523 -4.477 -10 -10 -10c-1.74 0 -3.376 .444 -4.8 1.225"}],["path",{"d":"M7 15v-4.5a1.5 1.5 0 0 1 2.138 -1.358"}],["path",{"d":"M9.854 9.853c.094 .196 .146 .415 .146 .647v4.5"}],["path",{"d":"M7 13h3"}],["path",{"d":"M14 14v1h1"}],["path",{"d":"M17 13v-2a2 2 0 0 0 -2 -2h-1v1"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[5],"o":[14.5,14.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,3,4,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.07,12],[9.93,12.43],[8.5,13],[15.5,11]]}];

export const AdCircleOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AdCircleOffIcon.displayName = "AdCircleOffIcon";
