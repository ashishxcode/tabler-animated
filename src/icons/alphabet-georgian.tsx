"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 9c0 1 3 3 3 5c0 1.7 -1.3 3 -3 3s-3 -1.3 -3 -3v-1"}],["path",{"d":"M14 14a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M17 11v-1.2c0 -1.2 -2 -1.6 -2 -2.8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,13],"a":0.06},{"fx":"pop","n":[2],"a":0.24,"dl":0.1,"st":0.07,"os":[[16,9]]}];

export const AlphabetGeorgianIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlphabetGeorgianIcon.displayName = "AlphabetGeorgianIcon";
