"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 9l-6 6"}],["path",{"d":"M10 12l2 2"}],["path",{"d":"M12 10l2 2"}],["path",{"d":"M8 21a5 5 0 0 0 -5 -5"}],["path",{"d":"M16 3c-7.18 0 -13 5.82 -13 13a5 5 0 0 0 5 5c7.18 0 13 -5.82 13 -13a5 5 0 0 0 -5 -5"}],["path",{"d":"M16 3a5 5 0 0 0 5 5"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5],"o":[12,21],"d":[0,-2.4]}];

export const BallAmericanFootballIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BallAmericanFootballIcon.displayName = "BallAmericanFootballIcon";
