"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 13a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M12 10l0 3l2 0"}],["path",{"d":"M7 4l-2.75 2"}],["path",{"d":"M17 4l2.75 2"}]];
const rig: Rig[] = [{"fx":"spin","n":[1],"o":[12,12],"a":360},{"fx":"pop","n":[0,2,3],"o":[12,12],"a":0.05}];

export const AlarmIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlarmIcon.displayName = "AlarmIcon";
