"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"}],["path",{"d":"M6.5 9l.5 6l2 -4l2 4l.5 -6"}],["path",{"d":"M17 10.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"}]];
const rig: Rig[] = [{"fx":"swing","n":[0,1,2],"o":[12,6],"a":7}];

export const BadgeWcIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BadgeWcIcon.displayName = "BadgeWcIcon";
