"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 4v9a2 2 0 0 1 -2 2h-1a3 3 0 0 1 -3 -3v-1"}],["path",{"d":"M12 5v8a1 1 0 0 0 1 1h1a2 2 0 0 0 2 -2v-1"}],["path",{"d":"M21 14v1.096a5 5 0 0 1 -3.787 4.85l-.213 .054"}],["path",{"d":"M11 18h.01"}],["path",{"d":"M14 18h.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.14}];

export const CurrencyIranianRialIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyIranianRialIcon.displayName = "CurrencyIranianRialIcon";
