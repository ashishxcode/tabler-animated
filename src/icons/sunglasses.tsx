"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 4h-2l-3 10"}],["path",{"d":"M16 4h2l3 10"}],["path",{"d":"M10 16h4"}],["path",{"d":"M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"}],["path",{"d":"M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"}],["path",{"d":"M4 14l4.5 4.5"}],["path",{"d":"M15 14l4.5 4.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,3,4],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,16],[6.25,16.25],[17.25,16.25]]}];

export const SunglassesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SunglassesIcon.displayName = "SunglassesIcon";
