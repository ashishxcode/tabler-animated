"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 8a2 2 0 0 0 -2 -2"}],["path",{"d":"M6 8a6 6 0 1 1 12 0c0 4.97 -2.686 9 -6 9s-6 -4.03 -6 -9"}],["path",{"d":"M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,9.5],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[13,7],[8.5,19.5]]}];

export const BalloonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BalloonIcon.displayName = "BalloonIcon";
