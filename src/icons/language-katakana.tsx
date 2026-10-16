"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 5h6.586a1 1 0 0 1 .707 1.707l-1.293 1.293"}],["path",{"d":"M8 8c0 1.5 .5 3 -2 5"}],["path",{"d":"M12 20l4 -9l4 9"}],["path",{"d":"M19.1 18h-6.2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12.5,12.5],"a":0.1}];

export const LanguageKatakanaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LanguageKatakanaIcon.displayName = "LanguageKatakanaIcon";
