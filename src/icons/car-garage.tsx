"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M15 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M5 20h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"}],["path",{"d":"M3 6l9 -4l9 4"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12,12],"d":[2.4,0]}];

export const CarGarageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CarGarageIcon.displayName = "CarGarageIcon";
