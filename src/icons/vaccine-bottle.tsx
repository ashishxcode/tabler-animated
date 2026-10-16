"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -1"}],["path",{"d":"M10 6v.98c0 .877 -.634 1.626 -1.5 1.77c-.866 .144 -1.5 .893 -1.5 1.77v8.48a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-8.48c0 -.877 -.634 -1.626 -1.5 -1.77a1.795 1.795 0 0 1 -1.5 -1.77v-.98"}],["path",{"d":"M7 12h10"}],["path",{"d":"M7 18h10"}],["path",{"d":"M11 15h2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,13.5],"a":0.06},{"fx":"pop","n":[0,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,4.5],[12,12],[12,18],[12,15]]}];

export const VaccineBottleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VaccineBottleIcon.displayName = "VaccineBottleIcon";
