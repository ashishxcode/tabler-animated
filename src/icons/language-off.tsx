"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 20l2.463 -5.541m1.228 -2.764l.309 -.695l.8 1.8"}],["path",{"d":"M18 18h-5.1"}],["path",{"d":"M8.747 8.748c-.66 2.834 -2.536 4.252 -4.747 4.252"}],["path",{"d":"M4 6.371l2.371 0"}],["path",{"d":"M5 9c0 2.144 2.252 3.908 6 4"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[15.45,18],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,2,3,4],"o":[10.4,13.19],"a":0.1}];

export const LanguageOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LanguageOffIcon.displayName = "LanguageOffIcon";
