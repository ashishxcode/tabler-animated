"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20h4l1.5 -3"}],["path",{"d":"M17 20l-1 -5h-5l1 -7"}],["path",{"d":"M4 10l4 -1l4 -1l4 1.5l4 1.5"}],["path",{"d":"M10.007 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[12,14],"a":0.06},{"fx":"pop","n":[0,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[6.75,18.5],[12.01,5]]}];

export const YogaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
YogaIcon.displayName = "YogaIcon";
