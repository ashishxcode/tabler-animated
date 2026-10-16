"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 21v-16"}],["path",{"d":"M6 15h12"}],["path",{"d":"M6 9h10.5"}],["path",{"d":"M10.05 3a2.5 2.5 0 0 0 3.987 1.47a3 3 0 0 0 2.047 2.387a2.504 2.504 0 0 0 1.916 3.093v9.05a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h2.05"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,13],[12,15],[11.25,9]]}];

export const ChocolateIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChocolateIcon.displayName = "ChocolateIcon";
