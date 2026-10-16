"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 10h-14l4 -4"}],["path",{"d":"M7 14h14l-4 4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[10,8],"d":[-2.2,0]},{"fx":"nudge","n":[1],"o":[14,16],"d":[2.2,0]}];

export const ArrowsExchange2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsExchange2Icon.displayName = "ArrowsExchange2Icon";
