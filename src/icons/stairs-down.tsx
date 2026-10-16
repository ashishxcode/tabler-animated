"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M22 21h-5v-5h-5v-5h-5v-5h-5"}],["path",{"d":"M18 3v7"}],["path",{"d":"M15 7l3 3l3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,13.5],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[18,6.5],[18,8.5]]}];

export const StairsDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StairsDownIcon.displayName = "StairsDownIcon";
