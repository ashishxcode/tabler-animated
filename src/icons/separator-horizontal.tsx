"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12l16 0"}],["path",{"d":"M8 8l4 -4l4 4"}],["path",{"d":"M16 16l-4 4l-4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[12,12],"st":0.07},{"fx":"pop","n":[0],"o":[12,12],"a":0.04}];

export const SeparatorHorizontalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SeparatorHorizontalIcon.displayName = "SeparatorHorizontalIcon";
