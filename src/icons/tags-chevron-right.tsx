"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19h13.485a1 1 0 0 0 .814 -.419l4.286 -6a1 1 0 0 0 0 -1.162l-4.286 -6a1 1 0 0 0 -.814 -.419h-13.485l5 7l-5 7"}],["path",{"d":"M10 19l4.585 -6.419a1 1 0 0 0 0 -1.162l-4.585 -6.419"}]];
const rig: Rig[] = [{"fx":"swing","n":[0,1],"o":[12.39,6],"a":7}];

export const TagsChevronRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TagsChevronRightIcon.displayName = "TagsChevronRightIcon";
