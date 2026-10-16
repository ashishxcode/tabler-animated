"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M3 15s.616 -5.544 2.332 -7.93"}],["path",{"d":"M8.637 7.112c2.717 3.313 5.882 12.888 8.363 12.888c2 0 3.333 -3 4 -9"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[14.82,13.56],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,6],[4.17,11.04]]}];

export const MathMaxIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathMaxIcon.displayName = "MathMaxIcon";
