"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 3v13.446c0 .345 .155 .665 .411 .848l6.125 4.375a.78 .78 0 0 0 .928 0l6.125 -4.375a1.04 1.04 0 0 0 .411 -.848v-13.446l-7 5l-7 -5"}],["path",{"d":"M5 10l6.536 4.669a.78 .78 0 0 0 .928 0l6.536 -4.669"}]];
const rig: Rig[] = [{"fx":"swing","n":[0,1],"o":[12,4],"a":7}];

export const TagsChevronDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TagsChevronDownIcon.displayName = "TagsChevronDownIcon";
