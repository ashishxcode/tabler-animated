"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.59 19h-12.86a.98 .98 0 0 1 -.81 -.411l-4.185 -6.125a.81 .81 0 0 1 0 -.928l4.184 -6.125a.98 .98 0 0 1 .811 -.411h12.86l-4.782 7l4.782 7"}],["path",{"d":"M13.895 19l-4.465 -6.536a.81 .81 0 0 1 0 -.928l4.465 -6.536"}]];
const rig: Rig[] = [{"fx":"swing","n":[0,1],"o":[11.59,6],"a":7}];

export const TagsChevronLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TagsChevronLeftIcon.displayName = "TagsChevronLeftIcon";
