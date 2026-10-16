"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"}],["path",{"d":"M9 7h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09"}],["path",{"d":"M10 11h4"}],["path",{"d":"M10 6v10v-9"}],["path",{"d":"M13 6v1"}],["path",{"d":"M13 15v1"}]];
const rig: Rig[] = [{"fx":"pop","n":[5],"o":[13,15.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.14}];

export const ReceiptBitcoinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ReceiptBitcoinIcon.displayName = "ReceiptBitcoinIcon";
