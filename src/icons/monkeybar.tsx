"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21v-15l5 -3l5 3v15"}],["path",{"d":"M8 21v-7"}],["path",{"d":"M3 14h10"}],["path",{"d":"M6 10a2 2 0 1 1 4 0"}],["path",{"d":"M13 13c6 0 3 8 8 8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[8,12],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,17.5],[8,14],[8,9],[17,17]]}];

export const MonkeybarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MonkeybarIcon.displayName = "MonkeybarIcon";
