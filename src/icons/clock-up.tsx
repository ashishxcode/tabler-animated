"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.983 12.548a9 9 0 1 0 -8.45 8.436"}],["path",{"d":"M19 22v-6"}],["path",{"d":"M22 19l-3 -3l-3 3"}],["path",{"d":"M12 7v5l2.5 2.5"}]];
const rig: Rig[] = [{"fx":"spin","n":[3],"o":[12,12],"a":360},{"fx":"pop","n":[0,1,2],"o":[12.5,12.5],"a":0.05}];

export const ClockUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClockUpIcon.displayName = "ClockUpIcon";
