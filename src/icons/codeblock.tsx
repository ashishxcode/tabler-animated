"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 4l-2 2l2 2"}],["path",{"d":"M12 4l2 2l-2 2"}],["path",{"d":"M8 8l1 -4"}],["path",{"d":"M17 6a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,13],"a":0.06},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[4,6],[13,6],[8.5,6]]}];

export const CodeblockIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CodeblockIcon.displayName = "CodeblockIcon";
