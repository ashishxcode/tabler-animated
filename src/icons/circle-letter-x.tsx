"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M10 8l4 8"}],["path",{"d":"M10 16l4 -8"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[12,12],"dl":0.05,"st":0.1},{"fx":"pop","n":[0],"o":[12,12],"a":0.05}];

export const CircleLetterXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleLetterXIcon.displayName = "CircleLetterXIcon";
