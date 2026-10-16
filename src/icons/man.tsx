"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 16v5"}],["path",{"d":"M14 16v5"}],["path",{"d":"M9 9h6l-1 7h-4l-1 -7"}],["path",{"d":"M5 11c1.333 -1.333 2.667 -2 4 -2"}],["path",{"d":"M19 11c-1.333 -1.333 -2.667 -2 -4 -2"}],["path",{"d":"M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"slide","n":[0],"o":[10,18.5],"d":[0,-1.6]}];

export const ManIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ManIcon.displayName = "ManIcon";
