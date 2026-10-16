"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572"}],["path",{"d":"M3 13h2l2 3l2 -6l1 3h3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.99,12.99],"a":0.08},{"fx":"pop","n":[1],"o":[8,13],"a":0.22,"dl":0.1}];

export const HeartbeatIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HeartbeatIcon.displayName = "HeartbeatIcon";
