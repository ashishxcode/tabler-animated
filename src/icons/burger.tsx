"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 15h16a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4"}],["path",{"d":"M12 4c3.783 0 6.953 2.133 7.786 5h-15.572c.833 -2.867 4.003 -5 7.786 -5"}],["path",{"d":"M5 12h14"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,11.5],"a":0.06}];

export const BurgerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BurgerIcon.displayName = "BurgerIcon";
