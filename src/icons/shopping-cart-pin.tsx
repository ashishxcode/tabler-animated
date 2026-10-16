"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M12 17h-6v-14h-2"}],["path",{"d":"M6 5l14 1l-.716 5.011m-5.284 1.989h-8"}],["path",{"d":"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879"}],["path",{"d":"M19 18v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[19,18.5],"a":0.35,"dl":0.2},{"fx":"slide","n":[0,1,2],"o":[12,12],"d":[2.4,0]}];

export const ShoppingCartPinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShoppingCartPinIcon.displayName = "ShoppingCartPinIcon";
