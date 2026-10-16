"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 9h.01"}],["path",{"d":"M14 9h.01"}],["path",{"d":"M12 3a7 7 0 0 1 7 7v1l1 0a2 2 0 1 1 0 4l-1 0v3l2 3h-10a6 6 0 0 1 -6 -5.775l0 -.226l-1 0a2 2 0 0 1 0 -4l1 0v-1a7 7 0 0 1 7 -7l0 .001"}],["path",{"d":"M11 14h2a1 1 0 0 0 -2 0"}]];
const rig: Rig[] = [{"fx":"shake","n":[0,1,2,3],"o":[12,12]}];

export const Ghost2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Ghost2Icon.displayName = "Ghost2Icon";
