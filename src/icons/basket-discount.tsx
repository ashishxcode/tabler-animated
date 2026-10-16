"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 10l-2 -6"}],["path",{"d":"M7 10l2 -6"}],["path",{"d":"M12.5 20h-5.256a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.394 2.248"}],["path",{"d":"M13.856 13.254a2 2 0 1 0 -1.856 2.746"}],["path",{"d":"M16 21l5 -5"}],["path",{"d":"M21 21v.01"}],["path",{"d":"M16 16v.01"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4,5,6],"o":[12,5],"a":-8}];

export const BasketDiscountIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BasketDiscountIcon.displayName = "BasketDiscountIcon";
