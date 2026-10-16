"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098"}],["path",{"d":"M12 17v.01"}],["path",{"d":"M12 13.5a1.5 1.5 0 0 1 .394 -1.1m2.106 -1.9a2.6 2.6 0 0 0 -3.347 -3.361"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[12,17.01],"a":0.4,"dl":0.12},{"fx":"pop","n":[0],"o":[12,12],"a":0.05},{"fx":"pop","n":[2],"o":[12.91,10.24],"a":0.25,"dl":0.1}];

export const HelpOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HelpOffIcon.displayName = "HelpOffIcon";
