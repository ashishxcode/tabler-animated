"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 3l-4 4l4 4"}],["path",{"d":"M3 7h11a3 3 0 0 1 3 3v11"}],["path",{"d":"M13 17l4 4l4 -4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[-1.73,1.73]}];

export const ArrowsLeftDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsLeftDownIcon.displayName = "ArrowsLeftDownIcon";
