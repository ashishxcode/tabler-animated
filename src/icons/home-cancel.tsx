"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M17 21l4 -4"}],["path",{"d":"M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2c.58 0 1.103 .247 1.468 .642"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"hop","n":[0,2,3],"o":[12.5,22],"d":[0,-1.8]}];

export const HomeCancelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeCancelIcon.displayName = "HomeCancelIcon";
