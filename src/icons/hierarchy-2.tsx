"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 3h4v4h-4l0 -4"}],["path",{"d":"M3 17h4v4h-4l0 -4"}],["path",{"d":"M17 17h4v4h-4l0 -4"}],["path",{"d":"M7 17l5 -4l5 4"}],["path",{"d":"M12 7l0 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,15],"a":0.06},{"fx":"pop","n":[0,1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[5,19],[19,19],[12,10]]}];

export const Hierarchy2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Hierarchy2Icon.displayName = "Hierarchy2Icon";
