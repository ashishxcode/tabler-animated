"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 19v-16h4.5a4.5 4.5 0 1 1 0 9h-4.5"}],["path",{"d":"M19 21l-9 -9"}],["path",{"d":"M13 21l6 -6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[10.5,11],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[14.5,16.5],[16,18]]}];

export const PrescriptionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PrescriptionIcon.displayName = "PrescriptionIcon";
