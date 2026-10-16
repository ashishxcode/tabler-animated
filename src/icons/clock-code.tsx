"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.931 13.111a9 9 0 1 0 -9.453 7.874"}],["path",{"d":"M20 21l2 -2l-2 -2"}],["path",{"d":"M17 17l-2 2l2 2"}],["path",{"d":"M12 7v5l2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[18.5,19],"a":0.35,"dl":0.2},{"fx":"spin","n":[3],"o":[12,12],"a":360},{"fx":"pop","n":[0],"o":[12,11.99],"a":0.05}];

export const ClockCodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClockCodeIcon.displayName = "ClockCodeIcon";
