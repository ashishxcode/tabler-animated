"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"}],["path",{"d":"M14 7l6 0"}],["path",{"d":"M14 11l6 0"}],["path",{"d":"M4 15l16 0"}],["path",{"d":"M4 19l16 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[7,8],"st":0.07},{"fx":"pop","n":[3,4],"o":[12,17],"a":0.04}];

export const FloatLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FloatLeftIcon.displayName = "FloatLeftIcon";
