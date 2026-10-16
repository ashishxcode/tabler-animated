"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 7a2 2 0 1 0 2 2"}],["path",{"d":"M22 17v-3h-4m-4 0h-12"}],["path",{"d":"M2 8v9"}],["path",{"d":"M12 12v2h2m4 0h4v-2a3 3 0 0 0 -3 -3h-6"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[12,15.5],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,9],[2,12.5],[17,11.5]]}];

export const BedOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BedOffIcon.displayName = "BedOffIcon";
