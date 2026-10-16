"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 10l-7 -7l-9 9h2v7a2 2 0 0 0 2 2h7.5"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2c.661 0 1.248 .32 1.612 .815"}],["path",{"d":"M19 14l-2 4h4l-2 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[19,18],"a":0.35,"dl":0.2},{"fx":"flash","n":[0,1],"o":[11,12]}];

export const HomeBoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeBoltIcon.displayName = "HomeBoltIcon";
