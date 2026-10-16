"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6"}],["path",{"d":"M13 5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -14"}],["path",{"d":"M7 19l3 0"}],["path",{"d":"M17 8l0 .01"}],["path",{"d":"M16 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M9 15l0 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[17,12],"a":0.06},{"fx":"pop","n":[0,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[6.5,10],[8.5,19],[17,8],[17,16],[9,17]]}];

export const Devices2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Devices2Icon.displayName = "Devices2Icon";
