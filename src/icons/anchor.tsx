"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2"}],["path",{"d":"M9 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,15],"a":0.08},{"fx":"pop","n":[1],"o":[12,6],"a":0.22,"dl":0.1}];

export const AnchorIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AnchorIcon.displayName = "AnchorIcon";
