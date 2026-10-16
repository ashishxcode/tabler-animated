"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 3l4 4"}],["path",{"d":"M19 5l-4.5 4.5"}],["path",{"d":"M11.5 6.5l6 6"}],["path",{"d":"M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5"}],["path",{"d":"M7.5 12.5l1.5 1.5"}],["path",{"d":"M10.5 9.5l1.5 1.5"}],["path",{"d":"M3 21l3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[11.25,12.75],"a":0.06},{"fx":"pop","n":[0,1,2,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[19,5],[16.75,7.25],[14.5,9.5],[8.25,13.25],[11.25,10.25],[4.5,19.5]]}];

export const VaccineIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VaccineIcon.displayName = "VaccineIcon";
