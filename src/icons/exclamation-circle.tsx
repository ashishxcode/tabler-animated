"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M12 9v4"}],["path",{"d":"M12 16v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[12,12.51],"a":0.4,"dl":0.12},{"fx":"pop","n":[0],"o":[12,12],"a":0.05}];

export const ExclamationCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ExclamationCircleIcon.displayName = "ExclamationCircleIcon";
