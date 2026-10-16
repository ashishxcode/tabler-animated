"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 16v-6a2 2 0 1 1 4 0v6"}],["path",{"d":"M8 13h4"}],["path",{"d":"M16 8v8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2],"o":[12,12],"a":0.06},{"fx":"pop","n":[1],"a":0.24,"dl":0.1,"st":0.07,"os":[[10,13]]}];

export const AiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AiIcon.displayName = "AiIcon";
