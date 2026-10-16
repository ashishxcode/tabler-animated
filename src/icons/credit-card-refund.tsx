"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5"}],["path",{"d":"M3 10h18"}],["path",{"d":"M7 15h.01"}],["path",{"d":"M11 15h2"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16l-3 3l3 3"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5],"o":[12.5,13.5],"d":[1.8,0],"st":0.05}];

export const CreditCardRefundIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CreditCardRefundIcon.displayName = "CreditCardRefundIcon";
