"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}],["path",{"d":"M12 16v.01"}],["path",{"d":"M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[12.25,12.51],"a":0.4,"dl":0.12},{"fx":"pop","n":[0],"o":[12,12],"a":0.05}];

export const HelpCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HelpCircleIcon.displayName = "HelpCircleIcon";
