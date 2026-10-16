"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M13 17h-7v-14h-2"}],["path",{"d":"M6 5l14 1l-1 7h-13"}],["path",{"d":"M17 17v5"}],["path",{"d":"M21 17v5"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[19,19.5],"a":0.35,"dl":0.2},{"fx":"slide","n":[0,1,2],"o":[12,12],"d":[2.4,0]}];

export const ShoppingCartPauseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShoppingCartPauseIcon.displayName = "ShoppingCartPauseIcon";
