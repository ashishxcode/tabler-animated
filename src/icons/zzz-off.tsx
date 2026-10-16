"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12h6l-6 8h6"}],["path",{"d":"M14 4h6l-5.146 6.862m1.146 1.138h4"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,16],[17,8]]}];

export const ZzzOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZzzOffIcon.displayName = "ZzzOffIcon";
