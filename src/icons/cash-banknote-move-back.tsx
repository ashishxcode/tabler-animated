"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M12 18h-7a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4.5"}],["path",{"d":"M18 12h.01"}],["path",{"d":"M6 12h.01"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16l-3 3l3 3"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5],"o":[12.5,14],"d":[1.8,0],"st":0.05}];

export const CashBanknoteMoveBackIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CashBanknoteMoveBackIcon.displayName = "CashBanknoteMoveBackIcon";
