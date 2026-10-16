"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 3a2 2 0 0 0 -2 2"}],["path",{"d":"M19 3a2 2 0 0 1 2 2"}],["path",{"d":"M21 19a2 2 0 0 1 -2 2"}],["path",{"d":"M5 21a2 2 0 0 1 -2 -2"}],["path",{"d":"M9 3h1"}],["path",{"d":"M9 21h1"}],["path",{"d":"M14 3h1"}],["path",{"d":"M14 21h1"}],["path",{"d":"M3 9v1"}],["path",{"d":"M21 9v1"}],["path",{"d":"M3 14v1"}],["path",{"d":"M21 14v1"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4,5,6,7,8,9,10,11],"o":[12,12],"a":-8}];

export const SquareDashedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SquareDashedIcon.displayName = "SquareDashedIcon";
