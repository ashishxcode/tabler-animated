"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 10h14l-4 -4"}],["path",{"d":"M17 14h-14l4 4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[14,8],"d":[-2.2,0]},{"fx":"nudge","n":[1],"o":[10,16],"d":[2.2,0]}];

export const ArrowsExchangeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsExchangeIcon.displayName = "ArrowsExchangeIcon";
