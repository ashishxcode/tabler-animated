"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 7.4v2.6c0 2.8 2.2 5 5 5c.9 0 1.8 -.2 2.4 -.6"}],["path",{"d":"M5 19h14"}],["path",{"d":"M3 2.7l18 18"}],["path",{"d":"M16.4 12.4c.4 -.7 .6 -1.5 .6 -2.4v-5"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,11.7],"dl":0.25},{"fx":"draw","n":[0,1,3],"o":[12,12],"st":0.07}];

export const UnderlineOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UnderlineOffIcon.displayName = "UnderlineOffIcon";
