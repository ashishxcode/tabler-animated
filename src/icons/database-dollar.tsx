"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"}],["path",{"d":"M4 6v6c0 1.657 3.582 3 8 3c.415 0 .822 -.012 1.22 -.035"}],["path",{"d":"M20 10v-4"}],["path",{"d":"M4 12v6c0 1.657 3.582 3 8 3c.352 0 .698 -.009 1.037 -.025"}],["path",{"d":"M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"}],["path",{"d":"M19 21v1m0 -8v1"}]];
const rig: Rig[] = [{"fx":"pop","n":[4,5],"o":[19,18],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.14}];

export const DatabaseDollarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DatabaseDollarIcon.displayName = "DatabaseDollarIcon";
