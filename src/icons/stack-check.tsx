"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 4l-8 4l8 4l8 -4l-8 -4"}],["path",{"d":"M4 12l8 4"}],["path",{"d":"M4 16l7.004 3.502"}],["path",{"d":"M15 19l2 2l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[18,19],"dl":0.2,"st":0.08},{"fx":"slide","n":[0,1,2],"o":[12,11.75],"d":[0,-1.5],"st":0.07}];

export const StackCheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StackCheckIcon.displayName = "StackCheckIcon";
