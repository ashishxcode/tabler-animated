"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 21h14"}],["path",{"d":"M6 18h2"}],["path",{"d":"M7 18v3"}],["path",{"d":"M10 10l-1 1l3 3l1 -1m2 -2l3 -3l-3 -3l-3 3"}],["path",{"d":"M10.5 12.5l-1.5 1.5"}],["path",{"d":"M17 3l3 3"}],["path",{"d":"M12 21a6 6 0 0 0 5.457 -3.505m.441 -3.599a6 6 0 0 0 -2.183 -3.608"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,21],[7,18],[7,19.5],[13.5,9.5],[9.75,13.25],[18.5,4.5],[14.95,15.64]]}];

export const MicroscopeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MicroscopeOffIcon.displayName = "MicroscopeOffIcon";
