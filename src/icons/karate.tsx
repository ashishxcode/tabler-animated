"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 9l4.5 1l3 2.5"}],["path",{"d":"M13 21v-8l3 -5.5"}],["path",{"d":"M8 4.5l4 2l4 1l4 3.5l-2 3.5"}],["path",{"d":"M15.007 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[14,12.75],"a":0.06},{"fx":"pop","n":[0,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[6.75,10.75],[17.01,5]]}];

export const KarateIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
KarateIcon.displayName = "KarateIcon";
