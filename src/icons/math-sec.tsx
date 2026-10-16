"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 15c.345 .6 1.258 1 2 1a2 2 0 1 0 0 -4a2 2 0 1 1 0 -4c.746 0 1.656 .394 2 1"}],["path",{"d":"M21 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0"}],["path",{"d":"M14 8h-4v8h4"}],["path",{"d":"M10 12h2.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.06},{"fx":"pop","n":[3],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.25,12]]}];

export const MathSecIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathSecIcon.displayName = "MathSecIcon";
