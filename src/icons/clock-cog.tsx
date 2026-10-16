"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12a9 9 0 1 0 -9.002 9"}],["path",{"d":"M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M19.001 15.5v1.5"}],["path",{"d":"M19.001 21v1.5"}],["path",{"d":"M22.032 17.25l-1.299 .75"}],["path",{"d":"M17.27 20l-1.3 .75"}],["path",{"d":"M15.97 17.25l1.3 .75"}],["path",{"d":"M20.733 20l1.3 .75"}],["path",{"d":"M12 7v5l2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2,3,4,5,6,7],"o":[19,19],"a":0.35,"dl":0.2},{"fx":"spin","n":[8],"o":[12,12],"a":360},{"fx":"pop","n":[0],"o":[12,12],"a":0.05}];

export const ClockCogIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClockCogIcon.displayName = "ClockCogIcon";
