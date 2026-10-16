"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 12h-2l9 -9l7.636 7.636"}],["path",{"d":"M5 12v7a2 2 0 0 0 2 2h5"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h1.5"}],["path",{"d":"M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.32,7.5],"a":0.08},{"fx":"draw","n":[1,2,3],"o":[13.5,17],"dl":0.15}];

export const HomeShieldIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeShieldIcon.displayName = "HomeShieldIcon";
