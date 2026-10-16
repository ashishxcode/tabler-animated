"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9"}],["path",{"d":"M7 20l10 0"}],["path",{"d":"M9 16l0 4"}],["path",{"d":"M15 16l0 4"}],["path",{"d":"M17 8l4 -4m-4 0l4 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[15,18],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,10],"a":0.06},{"fx":"pop","n":[1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,20],[9,18],[19,6]]}];

export const ScreenShareOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ScreenShareOffIcon.displayName = "ScreenShareOffIcon";
