"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 9a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"}],["path",{"d":"M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"}],["path",{"d":"M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,9],"a":0.1},{"fx":"pop","n":[1,2],"o":[12,16.45],"a":0.3,"dl":0.12}];

export const AwardIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AwardIcon.displayName = "AwardIcon";
