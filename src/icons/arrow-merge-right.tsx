"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 8l-4 -4l-4 4"}],["path",{"d":"M12 20v-16"}],["path",{"d":"M18 18c-4 -1.333 -6 -4.667 -6 -10"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[13,12],"d":[2.4,0]}];

export const ArrowMergeRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowMergeRightIcon.displayName = "ArrowMergeRightIcon";
