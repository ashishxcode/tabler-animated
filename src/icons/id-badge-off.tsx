"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.141 3.125a3 3 0 0 1 .859 -.125h8a3 3 0 0 1 3 3v9m-.13 3.874a3 3 0 0 1 -2.87 2.126h-8a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 .128 -.869"}],["path",{"d":"M11.179 11.176a2 2 0 1 0 2.635 2.667"}],["path",{"d":"M10 6h4"}],["path",{"d":"M9 18h6"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"swing","n":[0,1,2,3],"o":[12,4],"a":7}];

export const IdBadgeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
IdBadgeOffIcon.displayName = "IdBadgeOffIcon";
