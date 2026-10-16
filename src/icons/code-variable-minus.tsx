"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.5 16h-6.5a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"}],["path",{"d":"M16 18h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[19,18],"dl":0.2,"st":0.08},{"fx":"nudge","n":[0],"o":[12,12],"d":[1.8,0]}];

export const CodeVariableMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CodeVariableMinusIcon.displayName = "CodeVariableMinusIcon";
