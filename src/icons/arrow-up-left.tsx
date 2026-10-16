"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 7l10 10"}],["path",{"d":"M16 7l-9 0l0 9"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12,12],"d":[-1.73,-1.73]}];

export const ArrowUpLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowUpLeftIcon.displayName = "ArrowUpLeftIcon";
