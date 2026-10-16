"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 20v-11.5a4.5 4.5 0 1 0 -9 0v8.5"}],["path",{"d":"M11 14l-3 3l-3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.5,12],"a":0.08},{"fx":"pop","n":[1],"o":[8,15.5],"a":0.22,"dl":0.1}];

export const UTurnLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UTurnLeftIcon.displayName = "UTurnLeftIcon";
