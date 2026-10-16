"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 8l4 -4l4 4"}],["path",{"d":"M7 4l0 9"}],["path",{"d":"M13 16l4 4l4 -4"}],["path",{"d":"M17 10l0 10"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[7,8.5],"d":[0,-2.2]},{"fx":"nudge","n":[2,3],"o":[17,15],"d":[0,2.2]}];

export const SwitchVerticalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SwitchVerticalIcon.displayName = "SwitchVerticalIcon";
