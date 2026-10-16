"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M12 17l0 .01"}],["path",{"d":"M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,17.01],"a":0.4,"dl":0.12},{"fx":"pop","n":[0],"o":[12,12],"a":0.05},{"fx":"pop","n":[2],"o":[12.34,10.24],"a":0.25,"dl":0.1}];

export const HelpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HelpIcon.displayName = "HelpIcon";
