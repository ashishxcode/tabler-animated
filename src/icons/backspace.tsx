"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5l11 0"}],["path",{"d":"M12 10l4 4m0 -4l-4 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.31,12],"a":0.08},{"fx":"pop","n":[1],"o":[14,12],"a":0.22,"dl":0.1}];

export const BackspaceIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BackspaceIcon.displayName = "BackspaceIcon";
