"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 13v-10"}],["path",{"d":"M9 6l3 -3l3 3"}],["path",{"d":"M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[0,-2.4]}];

export const ArrowMoveUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowMoveUpIcon.displayName = "ArrowMoveUpIcon";
