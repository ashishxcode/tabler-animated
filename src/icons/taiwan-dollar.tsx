"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 19a4 4 0 0 0 4 -4v-7"}],["path",{"d":"M14 8v10a1 1 0 0 0 1.45 .89l2.55 -1.27"}],["path",{"d":"M6 5h12"}],["path",{"d":"M6 8h12"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.14}];

export const TaiwanDollarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TaiwanDollarIcon.displayName = "TaiwanDollarIcon";
