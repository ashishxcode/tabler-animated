"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"}],["path",{"d":"M7 15v-6l2 2l2 -2v6"}],["path",{"d":"M14 13l2 2l2 -2m-2 2v-6"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[12.5,12],"st":0.07},{"fx":"pop","n":[0],"o":[12,12],"a":0.04}];

export const MarkdownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MarkdownIcon.displayName = "MarkdownIcon";
