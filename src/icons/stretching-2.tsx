"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6.5 21l3.5 -5"}],["path",{"d":"M5 11l7 -2"}],["path",{"d":"M16 21l-4 -7v-5l7 -4"}],["path",{"d":"M9.007 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[15.5,13],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.25,18.5],[8.5,10],[11.01,6]]}];

export const Stretching2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Stretching2Icon.displayName = "Stretching2Icon";
