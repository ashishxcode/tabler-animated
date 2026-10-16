"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 17v-13l-5 3l-5 -3v13l5 3l5 -3"}]];
const rig: Rig[] = [{"fx":"swing","n":[0],"o":[12,5],"a":7}];

export const BadgeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BadgeIcon.displayName = "BadgeIcon";
