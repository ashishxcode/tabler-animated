"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 12a10 10 0 1 0 20 0a10 10 0 1 0 -20 0"}],["path",{"d":"M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5"}],["path",{"d":"M7 13h3"}],["path",{"d":"M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.5,12],[8.5,13],[15.5,12]]}];

export const AdCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AdCircleIcon.displayName = "AdCircleIcon";
