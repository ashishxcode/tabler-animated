"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 16h-7a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v1"}],["path",{"d":"M16 18h6"}],["path",{"d":"M19 15v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[19,18],"dl":0.2,"st":0.08},{"fx":"nudge","n":[0],"o":[12,12],"d":[1.8,0]}];

export const CodeVariablePlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CodeVariablePlusIcon.displayName = "CodeVariablePlusIcon";
