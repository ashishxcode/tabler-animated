"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 14l6 -6"}],["path",{"d":"M9 8.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0","fill":"currentColor"}],["path",{"d":"M14 13.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0","fill":"currentColor"}],["path",{"d":"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12,12],"d":[1.8,0],"st":0.05}];

export const ReceiptTaxIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ReceiptTaxIcon.displayName = "ReceiptTaxIcon";
