"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 10l-.45 4.1a8.36 8.36 0 0 1 -5.18 6.83a1 1 0 0 1 -.74 0a8.36 8.36 0 0 1 -5.18 -6.83l-.45 -4.1"}],["path",{"d":"M13 3a4.9 4.9 0 0 0 -1 3"}],["path",{"d":"M8 6h8a3 3 0 0 1 3 3a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2],"o":[12,13.5],"a":0.06},{"fx":"pop","n":[1],"a":0.24,"dl":0.1,"st":0.07,"os":[[12.5,4.5]]}];

export const AcornIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AcornIcon.displayName = "AcornIcon";
