"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5"}],["path",{"d":"M3 13h7"}],["path",{"d":"M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5"}],["path",{"d":"M14 13h7"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,3],"o":[12,13],"st":0.07},{"fx":"pop","n":[0,2],"o":[12,12],"a":0.04}];

export const LetterCaseUpperIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LetterCaseUpperIcon.displayName = "LetterCaseUpperIcon";
