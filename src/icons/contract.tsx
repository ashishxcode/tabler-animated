"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 21h-2a3 3 0 0 1 -3 -3v-1h5.5"}],["path",{"d":"M17 8.5v-3.5a2 2 0 1 1 2 2h-2"}],["path",{"d":"M19 3h-11a3 3 0 0 0 -3 3v11"}],["path",{"d":"M9 7h4"}],["path",{"d":"M9 11h4"}],["path",{"d":"M18.42 12.61a2.1 2.1 0 0 1 2.97 2.97l-6.39 6.42h-3v-3l6.42 -6.39"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,5],"o":[12.5,12.5],"st":0.07},{"fx":"pop","n":[2],"o":[12,10],"a":0.04}];

export const ContractIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ContractIcon.displayName = "ContractIcon";
