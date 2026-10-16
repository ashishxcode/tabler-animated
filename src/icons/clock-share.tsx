"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.943 13.016a9 9 0 1 0 -8.915 7.984"}],["path",{"d":"M16 22l5 -5"}],["path",{"d":"M21 21.5v-4.5h-4.5"}],["path",{"d":"M12 7v5l2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[18.5,19.5],"a":0.35,"dl":0.2},{"fx":"spin","n":[3],"o":[12,12],"a":360},{"fx":"pop","n":[0],"o":[12,12],"a":0.05}];

export const ClockShareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClockShareIcon.displayName = "ClockShareIcon";
