"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8"}],["path",{"d":"M8 6l0 12"}],["path",{"d":"M8 12l6 0"}],["path",{"d":"M9 3l0 3"}],["path",{"d":"M13 3l0 3"}],["path",{"d":"M9 18l0 3"}],["path",{"d":"M13 18l0 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[6],"o":[13,19.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3,4,5],"o":[11.5,12],"a":0.14}];

export const CurrencyBitcoinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyBitcoinIcon.displayName = "CurrencyBitcoinIcon";
