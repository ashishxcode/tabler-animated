"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16.18 16.172a2 2 0 0 0 2.652 2.648"}],["path",{"d":"M4 17h-2v-11a1 1 0 0 1 1 -1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0h-8"}],["path",{"d":"M16 5l1.5 7h4.5"}],["path",{"d":"M2 10h8m4 0h3"}],["path",{"d":"M7 7v3"}],["path",{"d":"M12 5v3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[17.42,17.59],"a":0.35,"dl":0.2},{"fx":"slide","n":[0,2,3,4,5,6],"o":[12,12],"d":[2.4,0]}];

export const BusOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BusOffIcon.displayName = "BusOffIcon";
