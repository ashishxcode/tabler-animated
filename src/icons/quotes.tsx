"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12c-1.333 -1.854 -1.333 -4.146 0 -6"}],["path",{"d":"M8 12c-1.333 -1.854 -1.333 -4.146 0 -6"}],["path",{"d":"M16 18c1.333 -1.854 1.333 -4.146 0 -6"}],["path",{"d":"M20 18c1.333 -1.854 1.333 -4.146 0 -6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.06}];

export const QuotesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
QuotesIcon.displayName = "QuotesIcon";
