"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M6 4v4"}],["path",{"d":"M6 12v8"}],["path",{"d":"M13.071 14.31a2 2 0 1 0 -1.071 3.69"}],["path",{"d":"M12 4v10"}],["path",{"d":"M12 18v2"}],["path",{"d":"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M18 4v1"}],["path",{"d":"M18 9v2.5"}],["path",{"d":"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879"}],["path",{"d":"M19 18v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[10],"o":[19,18.01],"a":0.35,"dl":0.2},{"fx":"nudge","n":[0,1,3,5,6,7,8],"o":[12,12],"d":[2.2,0]},{"fx":"pop","n":[2,4,9],"o":[14,13],"a":0.04}];

export const AdjustmentsPinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AdjustmentsPinIcon.displayName = "AdjustmentsPinIcon";
