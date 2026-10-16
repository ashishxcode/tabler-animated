"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3.06 13a9 9 0 1 0 .49 -4.087"}],["path",{"d":"M3 4.001v5h5"}],["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.03,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[5.5,6.5],[12,12]]}];

export const RestoreIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RestoreIcon.displayName = "RestoreIcon";
