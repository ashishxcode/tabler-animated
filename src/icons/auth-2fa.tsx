"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54"}],["path",{"d":"M10 16v-8h4"}],["path",{"d":"M10 12l3 0"}],["path",{"d":"M17 16v-6a2 2 0 0 1 4 0v6"}],["path",{"d":"M17 13l4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.5,12],[19,13]]}];

export const Auth2faIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Auth2faIcon.displayName = "Auth2faIcon";
