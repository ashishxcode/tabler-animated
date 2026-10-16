"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 3l-2 6l2 12h6l2 -12l-2 -6l-6 0"}],["path",{"d":"M10 7v5"}],["path",{"d":"M8 9h4"}],["path",{"d":"M13 21h4l2 -12l-2 -6h-4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[10,9.5],[10,9]]}];

export const CoffinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CoffinIcon.displayName = "CoffinIcon";
