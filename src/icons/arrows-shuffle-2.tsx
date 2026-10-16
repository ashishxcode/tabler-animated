"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 4l3 3l-3 3"}],["path",{"d":"M18 20l3 -3l-3 -3"}],["path",{"d":"M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5"}],["path",{"d":"M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[2.4,0]}];

export const ArrowsShuffle2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsShuffle2Icon.displayName = "ArrowsShuffle2Icon";
