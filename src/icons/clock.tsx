"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}],["path",{"d":"M12 7v5l3 3"}]];
const rig: Rig[] = [{"fx":"spin","n":[1],"o":[12,12],"a":360},{"fx":"pop","n":[0],"o":[12,12],"a":0.05}];

export const ClockIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClockIcon.displayName = "ClockIcon";
