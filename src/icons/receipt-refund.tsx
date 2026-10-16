"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"}],["path",{"d":"M15 14v-2a2 2 0 0 0 -2 -2h-4l2 -2m0 4l-2 -2"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1],"o":[12,12],"d":[1.8,0],"st":0.05}];

export const ReceiptRefundIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ReceiptRefundIcon.displayName = "ReceiptRefundIcon";
