"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.866 10.45a9 9 0 1 0 -7.815 10.488"}],["path",{"d":"M12 7v5l1.5 1.5"}],["path",{"d":"M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"}],["path",{"d":"M19 21v1m0 -8v1"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[19,18],"a":0.35,"dl":0.2},{"fx":"spin","n":[1],"o":[12,12],"a":360},{"fx":"pop","n":[0],"o":[11.93,12],"a":0.05}];

export const ClockDollarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClockDollarIcon.displayName = "ClockDollarIcon";
