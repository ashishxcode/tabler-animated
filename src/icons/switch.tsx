"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 4l4 0l0 4"}],["path",{"d":"M14.75 9.25l4.25 -5.25"}],["path",{"d":"M5 19l4 -4"}],["path",{"d":"M15 19l4 0l0 -4"}],["path",{"d":"M5 5l14 14"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,4],"o":[12,11.5],"d":[-2.2,0]},{"fx":"nudge","n":[2,3],"o":[12,17],"d":[2.2,0]}];

export const SwitchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SwitchIcon.displayName = "SwitchIcon";
