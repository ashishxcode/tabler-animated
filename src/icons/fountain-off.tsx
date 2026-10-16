"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 16v-5a2 2 0 1 0 -4 0"}],["path",{"d":"M15 16v-1m0 -4a2 2 0 1 1 4 0"}],["path",{"d":"M12 16v-4m0 -4v-2a3 3 0 0 1 6 0"}],["path",{"d":"M7.451 3.43a3 3 0 0 1 4.549 2.57"}],["path",{"d":"M20 16h1v1m-.871 3.114a2.99 2.99 0 0 1 -2.129 .886h-12a3 3 0 0 1 -3 -3v-2h13"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[17,12.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,12.5],[15,9.5],[9.73,4.5],[12,18.5]]}];

export const FountainOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FountainOffIcon.displayName = "FountainOffIcon";
