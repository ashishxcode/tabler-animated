"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 5h10a2 2 0 0 1 2 2v10"}],["path",{"d":"M19 19h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 1.85 -2"}],["path",{"d":"M7 15v-6l2 2l1 -1m1 1v4"}],["path",{"d":"M17.5 13.5l.5 -.5m-2 -1v-3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"draw","n":[0,2],"o":[14,11],"st":0.07},{"fx":"pop","n":[1],"o":[11,12],"a":0.04}];

export const MarkdownOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MarkdownOffIcon.displayName = "MarkdownOffIcon";
