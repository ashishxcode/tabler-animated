"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 6l7 7l-2 2"}],["path",{"d":"M10 10l-4.172 4.172a2.828 2.828 0 1 0 4 4l4.172 -4.172"}],["path",{"d":"M16 12l4.414 -4.414a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-4.414 4.414"}],["path",{"d":"M4 20l1.768 -1.768"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"write","n":[0,1,2,3],"o":[12.5,11.5]}];

export const BallpenOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BallpenOffIcon.displayName = "BallpenOffIcon";
