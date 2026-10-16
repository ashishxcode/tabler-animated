"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3l-4 7h8l-4 -7"}],["path",{"d":"M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2],"o":[12,11.5],"a":-8}];

export const TriangleSquareCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TriangleSquareCircleIcon.displayName = "TriangleSquareCircleIcon";
