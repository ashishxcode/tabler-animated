"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 15.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"}],["path",{"d":"M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5"}],["path",{"d":"M3 13h7"}],["path",{"d":"M21 12v7"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,2,3],"o":[12,15.5],"st":0.07},{"fx":"pop","n":[1],"o":[6.5,12],"a":0.04}];

export const LetterCaseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LetterCaseIcon.displayName = "LetterCaseIcon";
