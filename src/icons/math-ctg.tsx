"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 8h4"}],["path",{"d":"M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1"}],["path",{"d":"M12 8v8"}],["path",{"d":"M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[0],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,8]]}];

export const MathCtgIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathCtgIcon.displayName = "MathCtgIcon";
