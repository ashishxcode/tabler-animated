"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19.03 17.818a3 3 0 0 0 1.97 -2.818v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8c0 1.317 .85 2.436 2.03 2.84"}],["path",{"d":"M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M8 21a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,10.92],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,14],[12,20]]}];

export const UserScreenIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UserScreenIcon.displayName = "UserScreenIcon";
