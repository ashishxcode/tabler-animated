"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M11 20a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M12 16v3"}],["path",{"d":"M12 10v-7"}],["path",{"d":"M9 6l3 -3l3 3"}],["path",{"d":"M12 10v-7"}],["path",{"d":"M9 6l3 -3l3 3"}],["path",{"d":"M14.894 12.227l6.11 -2.224"}],["path",{"d":"M17.159 8.21l3.845 1.793l-1.793 3.845"}],["path",{"d":"M9.101 12.214l-6.075 -2.211"}],["path",{"d":"M6.871 8.21l-3.845 1.793l1.793 3.845"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3,4,5,6,7,8,9,10],"o":[12.02,9.5],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,20],[12,17.5]]}];

export const LoadBalancerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LoadBalancerIcon.displayName = "LoadBalancerIcon";
