"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 3v18"}],["path",{"d":"M19 21v-18"}],["path",{"d":"M5 7h14"}],["path",{"d":"M5 15h14"}],["path",{"d":"M8 13v4"}],["path",{"d":"M11 13v4"}],["path",{"d":"M16 13v4"}],["path",{"d":"M14 5v4"}],["path",{"d":"M11 5v4"}],["path",{"d":"M8 5v4"}],["path",{"d":"M3 21h18"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,10],"o":[12,12],"a":0.06},{"fx":"pop","n":[4,5,6,7,8,9],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,15],[11,15],[16,15],[14,7],[11,7],[8,7]]}];

export const AbacusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AbacusIcon.displayName = "AbacusIcon";
