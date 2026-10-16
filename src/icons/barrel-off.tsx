"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 4h8.722a2 2 0 0 1 1.841 1.22c.958 2.26 1.437 4.52 1.437 6.78a16.35 16.35 0 0 1 -.407 3.609m-.964 3.013l-.066 .158a2 2 0 0 1 -1.841 1.22h-9.444a2 2 0 0 1 -1.841 -1.22c-.958 -2.26 -1.437 -4.52 -1.437 -6.78c0 -2.21 .458 -4.42 1.374 -6.63"}],["path",{"d":"M14 4c.585 2.337 .913 4.674 .985 7.01m-.114 3.86a33.415 33.415 0 0 1 -.871 5.13"}],["path",{"d":"M10 4a34.42 34.42 0 0 0 -.366 1.632m-.506 3.501a32.126 32.126 0 0 0 -.128 2.867c0 2.667 .333 5.333 1 8"}],["path",{"d":"M4.5 16h11.5"}],["path",{"d":"M19.5 8h-7.5m-4 0h-3.5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[14.49,12],[9.5,12],[10.25,16],[12,8]]}];

export const BarrelOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BarrelOffIcon.displayName = "BarrelOffIcon";
