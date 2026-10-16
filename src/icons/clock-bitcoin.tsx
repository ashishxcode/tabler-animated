"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 21v-6m2 0v-1.5m0 9v-1.5m-2 -3h3m-1 0h.5a1.5 1.5 0 0 1 0 3h-3.5m3 -3h.5a1.5 1.5 0 0 0 0 -3h-3.5"}],["path",{"d":"M20.866 10.45a9 9 0 1 0 -7.815 10.488"}],["path",{"d":"M12 7v5l1.5 1.5"}]];
const rig: Rig[] = [{"fx":"spin","n":[2],"o":[12,12],"a":360},{"fx":"pop","n":[0,1],"o":[12,12.75],"a":0.05}];

export const ClockBitcoinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClockBitcoinIcon.displayName = "ClockBitcoinIcon";
