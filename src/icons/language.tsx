"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 6.371c0 4.418 -2.239 6.629 -5 6.629"}],["path",{"d":"M4 6.371h7"}],["path",{"d":"M5 9c0 2.144 2.252 3.908 6 4"}],["path",{"d":"M12 20l4 -9l4 9"}],["path",{"d":"M19.1 18h-6.2"}],["path",{"d":"M6.694 3l.793 .582"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5],"o":[12,11.5],"a":0.1}];

export const LanguageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LanguageIcon.displayName = "LanguageIcon";
