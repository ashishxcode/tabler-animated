"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128 .87"}],["path",{"d":"M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87"}],["path",{"d":"M3 11l8 0"}],["path",{"d":"M15 11l6 0"}],["path",{"d":"M7 15l.01 0"}],["path",{"d":"M11 15l2 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[12,12],"dl":0.25},{"fx":"slide","n":[1,2,3,4,5,6],"o":[12,12],"d":[1.8,0],"st":0.05}];

export const CreditCardOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CreditCardOffIcon.displayName = "CreditCardOffIcon";
