"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 15.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"}],["path",{"d":"M10 12v7"}],["path",{"d":"M14 15.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"}],["path",{"d":"M21 12v7"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,3],"o":[15.5,15.5],"st":0.07},{"fx":"pop","n":[0,2],"o":[12,15.5],"a":0.04}];

export const LetterCaseLowerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LetterCaseLowerIcon.displayName = "LetterCaseLowerIcon";
