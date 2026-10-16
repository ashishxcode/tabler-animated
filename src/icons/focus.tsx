"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11.5 12a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0","fill":"currentColor"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.08},{"fx":"pop","n":[0],"o":[12,12],"a":0.22,"dl":0.1}];

export const FocusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FocusIcon.displayName = "FocusIcon";
