"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14"}],["path",{"d":"M15 3l-12 12"}],["path",{"d":"M9.5 3l-6 6"}],["path",{"d":"M20 3.5l-5.5 5.5"}],["path",{"d":"M9 15l-5 5"}],["path",{"d":"M21 9h-12v12"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[9,9],[6.5,6],[17.25,6.25],[6.5,17.5],[15,15]]}];

export const FreezeRowColumnIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FreezeRowColumnIcon.displayName = "FreezeRowColumnIcon";
