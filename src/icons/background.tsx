"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 8l4 -4"}],["path",{"d":"M14 4l-10 10"}],["path",{"d":"M4 20l16 -16"}],["path",{"d":"M20 10l-10 10"}],["path",{"d":"M20 16l-4 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,6],[9,9],[15,15],[18,18]]}];

export const BackgroundIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BackgroundIcon.displayName = "BackgroundIcon";
