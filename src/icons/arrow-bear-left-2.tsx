"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 3h-5v5"}],["path",{"d":"M4 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93"}],["path",{"d":"M20 5l-4.5 4.5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[-2.4,0]}];

export const ArrowBearLeft2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBearLeft2Icon.displayName = "ArrowBearLeft2Icon";
