"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 21v-16m2 -2h10a2 2 0 0 1 2 2v10m0 4.01v1.99l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"}],["path",{"d":"M11 7l4 0"}],["path",{"d":"M9 11l2 0"}],["path",{"d":"M13 15l2 0"}],["path",{"d":"M15 11l0 .01"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[14,15],"a":0.35,"dl":0.2},{"fx":"slide","n":[0,1,2,4],"o":[12,12],"d":[1.8,0],"st":0.05}];

export const ReceiptOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ReceiptOffIcon.displayName = "ReceiptOffIcon";
