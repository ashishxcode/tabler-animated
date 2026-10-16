"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.942 13.02a9 9 0 1 0 -9.47 7.964"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h9.9"}],["path",{"d":"M11.5 3a17 17 0 0 0 0 18"}],["path",{"d":"M12.5 3c2 3.206 2.837 6.913 2.508 10.537"}],["path",{"d":"M20 21l2 -2l-2 -2"}],["path",{"d":"M17 17l-2 2l2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[5,6],"o":[18.5,19],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,11.99],"a":0.06},{"fx":"draw","n":[1,2,3,4],"o":[12,12],"dl":0.1,"st":0.1}];

export const WorldCodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WorldCodeIcon.displayName = "WorldCodeIcon";
