"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}],["path",{"d":"M12 8v4"}],["path",{"d":"M12 16h.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[12.01,12],"a":0.4,"dl":0.12},{"fx":"pop","n":[0],"o":[12,12],"a":0.05}];

export const AlertCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlertCircleIcon.displayName = "AlertCircleIcon";
