"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 13l4 -4l-4 -4"}],["path",{"d":"M7 13l-4 -4l4 -4"}],["path",{"d":"M12 14a5 5 0 0 1 5 -5h4"}],["path",{"d":"M12 19v-5a5 5 0 0 0 -5 -5h-4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,9.5],"d":[-2.2,0]},{"fx":"nudge","n":[3],"o":[7.5,14],"d":[2.2,0]}];

export const ArrowLeftRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowLeftRightIcon.displayName = "ArrowLeftRightIcon";
