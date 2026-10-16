"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 17h6l-4 -5l4 -5h-6l-4 5l4 5"}]];
const rig: Rig[] = [{"fx":"swing","n":[0],"o":[12,8],"a":7}];

export const ArrowBadgeLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBadgeLeftIcon.displayName = "ArrowBadgeLeftIcon";
