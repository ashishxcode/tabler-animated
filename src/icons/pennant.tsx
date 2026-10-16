"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 21l4 0"}],["path",{"d":"M10 21l0 -18"}],["path",{"d":"M10 4l9 4l-9 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[10,12],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[10,21],[14.5,8]]}];

export const PennantIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PennantIcon.displayName = "PennantIcon";
