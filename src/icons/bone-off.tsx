"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.5 8.502l.38 -.38a3 3 0 1 1 5.12 -2.122a3 3 0 1 1 -2.12 5.122l-.372 .372m-2.008 2.008l-2.378 2.378a3 3 0 1 1 -5.117 2.297l0 -.177l-.176 0a3 3 0 1 1 2.298 -5.115l2.378 -2.378"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[12,12],"a":0.08}];

export const BoneOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BoneOffIcon.displayName = "BoneOffIcon";
