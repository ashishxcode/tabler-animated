"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 13h-3.5a3.5 3.5 0 1 1 3.5 -3.5v6.5h-7"}],["path",{"d":"M12 3v.01"}],["path",{"d":"M12 19v2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[11.5,12],"a":0.14}];

export const CurrencyAfghaniIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyAfghaniIcon.displayName = "CurrencyAfghaniIcon";
