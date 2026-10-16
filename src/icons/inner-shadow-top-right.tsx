"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18"}],["path",{"d":"M18 12a6 6 0 0 0 -6 -6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.08},{"fx":"pop","n":[1],"o":[15,9],"a":0.22,"dl":0.1}];

export const InnerShadowTopRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
InnerShadowTopRightIcon.displayName = "InnerShadowTopRightIcon";
