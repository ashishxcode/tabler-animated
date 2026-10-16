"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M22 6h-5v5h-5v5h-5v5h-5"}],["path",{"d":"M6 10v-7"}],["path",{"d":"M3 6l3 -3l3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,13.5],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,6.5],[6,4.5]]}];

export const StairsUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StairsUpIcon.displayName = "StairsUpIcon";
