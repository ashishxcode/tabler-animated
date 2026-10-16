"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 16a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M12 12v-8"}],["path",{"d":"M9 7l3 -3l3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,16],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,8],[12,5.5]]}];

export const SwipeUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SwipeUpIcon.displayName = "SwipeUpIcon";
