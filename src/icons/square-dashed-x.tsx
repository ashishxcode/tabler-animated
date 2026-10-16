"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 3a2 2 0 0 0 -2 2"}],["path",{"d":"M19 3a2 2 0 0 1 2 2"}],["path",{"d":"M5 21a2 2 0 0 1 -2 -2"}],["path",{"d":"M9 3h1"}],["path",{"d":"M9 21h1"}],["path",{"d":"M14 3h1"}],["path",{"d":"M3 9v1"}],["path",{"d":"M21 9v1"}],["path",{"d":"M3 14v1"}],["path",{"d":"M22 22l-5 -5"}],["path",{"d":"M17 22l5 -5"}]];
const rig: Rig[] = [{"fx":"pop","n":[9,10],"o":[19.5,19.5],"a":0.05}];

export const SquareDashedXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SquareDashedXIcon.displayName = "SquareDashedXIcon";
