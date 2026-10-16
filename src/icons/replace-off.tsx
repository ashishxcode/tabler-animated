"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 3h1a1 1 0 0 1 1 1v1m-.303 3.717a1 1 0 0 1 -.697 .283h-4a1 1 0 0 1 -1 -1v-4c0 -.28 .115 -.532 .3 -.714"}],["path",{"d":"M19 15h1a1 1 0 0 1 1 1v1m-.303 3.717a1 1 0 0 1 -.697 .283h-4a1 1 0 0 1 -1 -1v-4c0 -.28 .115 -.532 .3 -.714"}],["path",{"d":"M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3"}],["path",{"d":"M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[18,18],"a":0.35,"dl":0.2},{"fx":"spin","n":[0,2,3],"o":[12,12],"a":360}];

export const ReplaceOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ReplaceOffIcon.displayName = "ReplaceOffIcon";
