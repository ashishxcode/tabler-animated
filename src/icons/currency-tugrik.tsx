"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 6h10"}],["path",{"d":"M12 6v13"}],["path",{"d":"M8 17l8 -3"}],["path",{"d":"M16 10l-8 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12.5],"a":0.14}];

export const CurrencyTugrikIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyTugrikIcon.displayName = "CurrencyTugrikIcon";
