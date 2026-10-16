"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 9l-1 1m-2 2l-3 3"}],["path",{"d":"M10 12l2 2"}],["path",{"d":"M8 21a5 5 0 0 0 -5 -5"}],["path",{"d":"M6.813 6.802a12.96 12.96 0 0 0 -3.813 9.198a5 5 0 0 0 5 5a12.96 12.96 0 0 0 9.186 -3.801m1.789 -2.227a12.94 12.94 0 0 0 2.025 -6.972a5 5 0 0 0 -5 -5a12.94 12.94 0 0 0 -6.967 2.022"}],["path",{"d":"M16 3a5 5 0 0 0 5 5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"hop","n":[0,1,2,3,4],"o":[12,21],"d":[0,-2.4]}];

export const BallAmericanFootballOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BallAmericanFootballOffIcon.displayName = "BallAmericanFootballOffIcon";
