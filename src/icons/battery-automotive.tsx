"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -10"}],["path",{"d":"M6 5v-2"}],["path",{"d":"M18 3v2"}],["path",{"d":"M6.5 12h3"}],["path",{"d":"M14.5 12h3"}],["path",{"d":"M16 10.5v3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5],"a":0.22,"dl":0.1,"st":0.07,"os":[[6,4],[18,4],[8,12],[16,12],[16,12]]}];

export const BatteryAutomotiveIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BatteryAutomotiveIcon.displayName = "BatteryAutomotiveIcon";
