"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.984 12.535a9 9 0 1 0 -8.431 8.448"}],["path",{"d":"M12 7v5l3 3"}],["path",{"d":"M19 16v6"}],["path",{"d":"M22 19l-3 3l-3 -3"}]];
const rig: Rig[] = [{"fx":"spin","n":[1],"o":[12,12],"a":360},{"fx":"pop","n":[0,2,3],"o":[12.5,12.5],"a":0.05}];

export const ClockDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClockDownIcon.displayName = "ClockDownIcon";
