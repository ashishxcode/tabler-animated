"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5h4"}],["path",{"d":"M17 5h4"}],["path",{"d":"M3 19h18"}],["path",{"d":"M4 9l2 6h1l2 -6"}],["path",{"d":"M12 10v5"}],["path",{"d":"M16 15v-6h2a2 2 0 1 1 0 4h-2"}],["path",{"d":"M10 5a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,19],"a":0.06},{"fx":"pop","n":[0,1,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,5],[19,5],[6.5,12],[12,12.5],[18,12],[12,5]]}];

export const Vip2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Vip2Icon.displayName = "Vip2Icon";
