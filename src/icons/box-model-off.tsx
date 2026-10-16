"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 8h4v4m0 4h-8v-8"}],["path",{"d":"M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405"}],["path",{"d":"M16 16l3.3 3.3"}],["path",{"d":"M16 8l3.3 -3.3"}],["path",{"d":"M8 8l-3.3 -3.3"}],["path",{"d":"M8 16l-3.3 3.3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[17.65,17.65],"a":0.35,"dl":0.2},{"fx":"hop","n":[0,1,3,4,5],"o":[12,20],"d":[0,-1.5]}];

export const BoxModelOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BoxModelOffIcon.displayName = "BoxModelOffIcon";
