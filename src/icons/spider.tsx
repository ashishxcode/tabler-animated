"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 4v2l5 5"}],["path",{"d":"M2.5 9.5l1.5 1.5h6"}],["path",{"d":"M4 19v-2l6 -6"}],["path",{"d":"M19 4v2l-5 5"}],["path",{"d":"M21.5 9.5l-1.5 1.5h-6"}],["path",{"d":"M20 19v-2l-6 -6"}],["path",{"d":"M8 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M10 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2,3,5,6],"o":[12,11.5],"a":0.06},{"fx":"pop","n":[1,4,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[6.25,10.25],[17.75,10.25],[12,9]]}];

export const SpiderIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SpiderIcon.displayName = "SpiderIcon";
