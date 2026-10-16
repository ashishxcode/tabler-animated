"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 5v16"}],["path",{"d":"M19 21v-2m0 -4v-12"}],["path",{"d":"M5 7h2m4 0h8"}],["path",{"d":"M5 15h10"}],["path",{"d":"M8 13v4"}],["path",{"d":"M11 13v4"}],["path",{"d":"M16 16v1"}],["path",{"d":"M14 5v4"}],["path",{"d":"M11 5v2"}],["path",{"d":"M8 8v1"}],["path",{"d":"M3 21h18"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[11],"o":[12,12],"dl":0.25},{"fx":"pop","n":[6],"o":[16,16.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3,4,5,7,8,9,10],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,13],[19,12],[12,7],[10,15],[8,15],[11,15],[14,7],[11,6],[8,8.5],[12,21]]}];

export const AbacusOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AbacusOffIcon.displayName = "AbacusOffIcon";
