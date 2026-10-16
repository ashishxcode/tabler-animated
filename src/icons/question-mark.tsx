"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"}],["path",{"d":"M12 19l0 .01"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,19.01],"a":0.4,"dl":0.12},{"fx":"pop","n":[0],"o":[12,10],"a":0.05}];

export const QuestionMarkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
QuestionMarkIcon.displayName = "QuestionMarkIcon";
