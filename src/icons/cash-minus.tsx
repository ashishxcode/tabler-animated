"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 15h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v3"}],["path",{"d":"M12 19h-4a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v5"}],["path",{"d":"M12 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M16 19h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3],"o":[17,15.5],"dl":0.2,"st":0.08},{"fx":"slide","n":[0,1],"o":[12,12],"d":[1.8,0],"st":0.05}];

export const CashMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CashMinusIcon.displayName = "CashMinusIcon";
