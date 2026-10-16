"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 11h5.38a1 1 0 0 1 .9 .55l.72 1.45h5a1 1 0 0 1 1 1v2"}],["path",{"d":"M3 4h1.13a1 1 0 0 1 1 .86l1.59 11.14"}],["path",{"d":"M17 18h-8"}],["path",{"d":"M9 18a2 2 0 1 1 -4 0a2 2 0 0 1 4 0"}],["path",{"d":"M21 18a2 2 0 1 1 -4 0a2 2 0 0 1 4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[11,10],"a":0.06},{"fx":"pop","n":[2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[13,18],[7,18],[19,18]]}];

export const LawnMowerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LawnMowerIcon.displayName = "LawnMowerIcon";
