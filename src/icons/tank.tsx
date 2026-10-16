"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 15a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3"}],["path",{"d":"M6 12l1 -5h5l3 5"}],["path",{"d":"M21 9l-7.8 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11,15],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[10.5,9.5],[17.1,9]]}];

export const TankIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TankIcon.displayName = "TankIcon";
