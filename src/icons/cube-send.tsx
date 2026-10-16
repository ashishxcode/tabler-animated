"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5"}],["path",{"d":"M11 9.5v5.5l5 3"}],["path",{"d":"M16 12.545l5 -3.03"}],["path",{"d":"M7 9h-5"}],["path",{"d":"M7 12h-3"}],["path",{"d":"M7 15h-1"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4,5],"o":[11.5,12.25],"d":[2,-2]}];

export const CubeSendIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CubeSendIcon.displayName = "CubeSendIcon";
