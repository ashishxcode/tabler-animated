"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M5.65 5.65l12.7 12.7"}],["path",{"d":"M5.65 18.35l12.7 -12.7"}],["path",{"d":"M12 3a9 9 0 0 0 9 9"}],["path",{"d":"M3 12a9 9 0 0 1 9 9"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4],"o":[12,21],"d":[0,-2.4]}];

export const BallBasketballIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BallBasketballIcon.displayName = "BallBasketballIcon";
