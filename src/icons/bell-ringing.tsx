"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"}],["path",{"d":"M9 17v1a3 3 0 0 0 6 0v-1"}],["path",{"d":"M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"}],["path",{"d":"M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"}]];
const rig: Rig[] = [{"fx":"swing","n":[0],"o":[12,4],"a":12},{"fx":"tilt","n":[1,2,3],"o":[12,4],"a":7,"dl":0.07}];

export const BellRingingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BellRingingIcon.displayName = "BellRingingIcon";
