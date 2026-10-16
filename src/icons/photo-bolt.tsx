"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8h.01"}],["path",{"d":"M13.5 21h-7.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"}],["path",{"d":"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"}],["path",{"d":"M14 14l1 -1c.669 -.643 1.45 -.823 2.18 -.54"}],["path",{"d":"M19 16l-2 3h4l-2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[17.5,17.17],"a":0.35,"dl":0.2},{"fx":"flash","n":[0,1,2],"o":[12,12]}];

export const PhotoBoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoBoltIcon.displayName = "PhotoBoltIcon";
