"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 13v-6l-5 4l-5 -4v6l5 4l5 -4"}]];
const rig: Rig[] = [{"fx":"swing","n":[0],"o":[12,8],"a":7}];

export const ArrowBadgeDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBadgeDownIcon.displayName = "ArrowBadgeDownIcon";
