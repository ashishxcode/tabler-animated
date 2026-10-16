"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 8.5v7"}],["path",{"d":"M9 10l6 4"}],["path",{"d":"M9 14l6 -4"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.12}];

export const CircleAsteriskIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleAsteriskIcon.displayName = "CircleAsteriskIcon";
