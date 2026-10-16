"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M12 18h-7a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7"}],["path",{"d":"M18 12h.01"}],["path",{"d":"M6 12h.01"}],["path",{"d":"M16 19h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"slide","n":[0,1,2,3],"o":[12,12],"d":[1.8,0],"st":0.05}];

export const CashBanknoteMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CashBanknoteMinusIcon.displayName = "CashBanknoteMinusIcon";
