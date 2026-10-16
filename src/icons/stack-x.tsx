"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 4l-8 4l8 4l8 -4l-8 -4"}],["path",{"d":"M4 12l8 4"}],["path",{"d":"M4 16l8 4"}],["path",{"d":"M22 22l-5 -5"}],["path",{"d":"M17 22l5 -5"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4],"o":[19.5,19.5],"dl":0.2,"st":0.08},{"fx":"slide","n":[0,1,2],"o":[12,12],"d":[0,-1.5],"st":0.07}];

export const StackXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StackXIcon.displayName = "StackXIcon";
