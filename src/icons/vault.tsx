"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12"}],["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M9.75 9.75l-1.75 -1.75"}],["path",{"d":"M14.25 9.75l1.75 -1.75"}],["path",{"d":"M14.25 14.25l1.75 1.75"}],["path",{"d":"M9.75 14.25l-1.75 1.75"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[8.88,8.88],[15.13,8.88],[15.13,15.13],[8.88,15.13]]}];

export const VaultIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VaultIcon.displayName = "VaultIcon";
