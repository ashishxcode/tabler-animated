"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 9v8a2 2 0 1 0 4 0"}],["path",{"d":"M19 9h-14"}],["path",{"d":"M19 5h-14"}],["path",{"d":"M9 9v4c0 2.5 -.667 4 -2 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.14}];

export const CurrencyRenminbiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyRenminbiIcon.displayName = "CurrencyRenminbiIcon";
