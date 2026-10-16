"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12.3a9 9 0 1 0 -8.683 8.694"}],["path",{"d":"M12 7v5l2 2"}],["path",{"d":"M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}]];
const rig: Rig[] = [{"fx":"spin","n":[1],"o":[12,12],"a":360},{"fx":"pop","n":[0,2],"o":[12.5,12.5],"a":0.05}];

export const ClockRecordIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClockRecordIcon.displayName = "ClockRecordIcon";
