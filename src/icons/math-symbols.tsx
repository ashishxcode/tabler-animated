"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12l18 0"}],["path",{"d":"M12 3l0 18"}],["path",{"d":"M16.5 4.5l3 3"}],["path",{"d":"M19.5 4.5l-3 3"}],["path",{"d":"M6 4l0 4"}],["path",{"d":"M4 6l4 0"}],["path",{"d":"M18 16l.01 0"}],["path",{"d":"M18 20l.01 0"}],["path",{"d":"M4 18l4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,3,4,5,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[18,6],[18,6],[6,6],[6,6],[18.01,16],[18.01,20],[6,18]]}];

export const MathSymbolsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathSymbolsIcon.displayName = "MathSymbolsIcon";
