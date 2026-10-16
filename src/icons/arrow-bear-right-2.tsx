"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 3h5v5"}],["path",{"d":"M20 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93"}],["path",{"d":"M4 5l4.5 4.5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[2.4,0]}];

export const ArrowBearRight2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBearRight2Icon.displayName = "ArrowBearRight2Icon";
