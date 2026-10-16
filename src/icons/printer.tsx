"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"}],["path",{"d":"M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4"}],["path",{"d":"M7 15a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2l0 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,13],"a":0.06},{"fx":"pop","n":[1,2],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,6],[12,17]]}];

export const PrinterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PrinterIcon.displayName = "PrinterIcon";
