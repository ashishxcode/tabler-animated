"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 3v18"}],["path",{"d":"M3 9h18"}],["path",{"d":"M3 15h10"}],["path",{"d":"M15 3v10"}],["path",{"d":"M11 21h-6a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8"}],["path",{"d":"M15 19l2 2l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[18,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[4],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[9,12],[12,9],[8,15],[15,8]]}];

export const FirewallCheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FirewallCheckIcon.displayName = "FirewallCheckIcon";
