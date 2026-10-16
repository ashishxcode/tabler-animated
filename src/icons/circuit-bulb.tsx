"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 12h5"}],["path",{"d":"M17 12h5"}],["path",{"d":"M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M8.5 8.5l7 7"}],["path",{"d":"M15.5 8.5l-7 7"}]];
const rig: Rig[] = [{"fx":"flash","n":[0,1,2,3,4],"o":[12,12]}];

export const CircuitBulbIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircuitBulbIcon.displayName = "CircuitBulbIcon";
