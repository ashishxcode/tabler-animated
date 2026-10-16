"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21.015 3.035l-16.515 16.465"}],["path",{"d":"M3.173 17.619a4.63 4.63 0 0 0 3.284 3.26a4.67 4.67 0 0 0 4.487 -1.194c1.85 -1.836 4.07 -10.65 4.07 -10.65s-8.88 2.296 -10.639 4.132a4.59 4.59 0 0 0 -1.202 4.452"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.76,11.27],"a":0.08},{"fx":"pop","n":[1],"o":[9.01,15.04],"a":0.22,"dl":0.1}];

export const WhiskIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WhiskIcon.displayName = "WhiskIcon";
