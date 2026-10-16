"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M15 9l6 -6"}],["path",{"d":"M21 7v-4h-4"}],["path",{"d":"M9 9l-6 -6"}],["path",{"d":"M3 7v-4h4"}],["path",{"d":"M5.5 8.5l3 -3"}],["path",{"d":"M12 16v5"}],["path",{"d":"M9.5 19h5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,3],"o":[12,9.5],"a":0.06},{"fx":"pop","n":[2,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[19,5],[5,5],[7,7],[12,18.5],[12,19]]}];

export const GenderTransgenderIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GenderTransgenderIcon.displayName = "GenderTransgenderIcon";
