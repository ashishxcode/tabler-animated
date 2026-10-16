"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 7h-6l4 5l-4 5h6l4 -5l-4 -5"}]];
const rig: Rig[] = [{"fx":"swing","n":[0],"o":[12,8],"a":7}];

export const ArrowBadgeRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBadgeRightIcon.displayName = "ArrowBadgeRightIcon";
