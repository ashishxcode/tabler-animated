"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12a9 9 0 1 0 -8.98 9"}],["path",{"d":"M12 7v5l1 1"}],["path",{"d":"M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5"}]];
const rig: Rig[] = [{"fx":"spin","n":[1],"o":[12,12],"a":360},{"fx":"pop","n":[0,2],"o":[12.5,12.5],"a":0.05}];

export const ClockShieldIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClockShieldIcon.displayName = "ClockShieldIcon";
