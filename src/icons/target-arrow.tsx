"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M12 7a5 5 0 1 0 5 5"}],["path",{"d":"M13 3.055a9 9 0 1 0 7.941 7.945"}],["path",{"d":"M15 6v3h3l3 -3h-3v-3l-3 3"}],["path",{"d":"M15 9l-3 3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4],"o":[12,12],"d":[2.4,0]}];

export const TargetArrowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TargetArrowIcon.displayName = "TargetArrowIcon";
