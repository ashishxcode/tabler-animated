"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 12h14"}],["path",{"d":"M3 7v-2a2 2 0 0 1 2 -2h2"}],["path",{"d":"M3 17v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M17 21h2a2 2 0 0 0 2 -2v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.22,"dl":0.1,"st":0.07,"os":[[5,5],[5,19],[19,5],[19,19]]}];

export const ScanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ScanIcon.displayName = "ScanIcon";
