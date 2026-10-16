"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M12.5 17h-6.5v-14h-2"}],["path",{"d":"M6 5l14 1l-.859 6.011m-6.141 .989h-7"}],["path",{"d":"M16 21l5 -5"}],["path",{"d":"M21 21v.01"}],["path",{"d":"M16 16v.01"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5],"o":[12.5,12.01],"d":[2.4,0]}];

export const ShoppingCartDiscountIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShoppingCartDiscountIcon.displayName = "ShoppingCartDiscountIcon";
