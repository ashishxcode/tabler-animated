"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M9.15 14.85l8.85 -10.85"}],["path",{"d":"M6 4l8.85 10.85"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[12,9.43],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,17],[17,17]]}];

export const CutIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CutIcon.displayName = "CutIcon";
