"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1l0 -3"}],["path",{"d":"M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6"}],["path",{"d":"M12 8h4v4"}],["path",{"d":"M16 8l-5 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[11.5,12.5],"a":0.12}];

export const WindowMaximizeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WindowMaximizeIcon.displayName = "WindowMaximizeIcon";
