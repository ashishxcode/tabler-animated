"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M15.861 15.896a3 3 0 0 0 4.265 4.22m.578 -3.417a3.012 3.012 0 0 0 -1.507 -1.45"}],["path",{"d":"M8.7 10.7l1.336 -.688m2.624 -1.352l2.64 -1.36"}],["path",{"d":"M8.7 13.3l6.6 3.4"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[17.86,18.12],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,12],[18,6],[12,9],[12,15]]}];

export const ShareOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShareOffIcon.displayName = "ShareOffIcon";
