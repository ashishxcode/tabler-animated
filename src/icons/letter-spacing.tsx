"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 12v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5"}],["path",{"d":"M13 4l3 8l3 -8"}],["path",{"d":"M5 18h14"}],["path",{"d":"M17 20l2 -2l-2 -2"}],["path",{"d":"M7 16l-2 2l2 2"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1],"o":[12,8],"st":0.07},{"fx":"pop","n":[2],"o":[12,18],"a":0.04}];

export const LetterSpacingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LetterSpacingIcon.displayName = "LetterSpacingIcon";
