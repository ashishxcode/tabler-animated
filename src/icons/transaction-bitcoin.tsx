"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 12h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09"}],["path",{"d":"M16 16h4"}],["path",{"d":"M16 11v10v-9"}],["path",{"d":"M19 11v1"}],["path",{"d":"M19 20v1"}],["path",{"d":"M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 5h8"}],["path",{"d":"M7 5v8a3 3 0 0 0 3 3h1"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,4],"o":[18,18.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,2,3,5,6,7,8],"o":[12,12],"a":0.14}];

export const TransactionBitcoinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TransactionBitcoinIcon.displayName = "TransactionBitcoinIcon";
