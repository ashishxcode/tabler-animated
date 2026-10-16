"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M11.5 17h-5.5v-14h-2"}],["path",{"d":"M6 5l14 1l-1 7h-13"}],["path",{"d":"M20 21l2 -2l-2 -2"}],["path",{"d":"M17 17l-2 2l2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[18.5,19],"a":0.35,"dl":0.2},{"fx":"slide","n":[0,1,2],"o":[12,12],"d":[2.4,0]}];

export const ShoppingCartCodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShoppingCartCodeIcon.displayName = "ShoppingCartCodeIcon";
