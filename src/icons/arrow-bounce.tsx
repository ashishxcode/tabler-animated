"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 18h4"}],["path",{"d":"M3 8a9 9 0 0 1 9 9v1l1.428 -4.285a12 12 0 0 1 6.018 -6.938l.554 -.277"}],["path",{"d":"M15 6h5v5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[11.5,12],"d":[2.4,0]}];

export const ArrowBounceIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBounceIcon.displayName = "ArrowBounceIcon";
