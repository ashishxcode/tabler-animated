"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M13.5 17h-7.5v-14h-2"}],["path",{"d":"M6 5l14 1l-.858 6.004m-2.642 .996h-10.5"}],["path",{"d":"M19 16l-2 3h4l-2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[19,19],"a":0.35,"dl":0.2},{"fx":"flash","n":[0,1,2],"o":[12,12]}];

export const ShoppingCartBoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShoppingCartBoltIcon.displayName = "ShoppingCartBoltIcon";
