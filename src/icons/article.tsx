"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -12"}],["path",{"d":"M7 8h10"}],["path",{"d":"M7 12h10"}],["path",{"d":"M7 16h10"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2,3],"o":[12,12],"dl":0.05,"st":0.07},{"fx":"pop","n":[0],"o":[12,12],"a":0.04}];

export const ArticleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArticleIcon.displayName = "ArticleIcon";
