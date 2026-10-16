"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.73 -.565 1.783 -.923 3 -.99"}],["path",{"d":"M8 3c-.194 .14 -.364 .305 -.506 .49"}],["path",{"d":"M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"}],["path",{"d":"M14 10h3v3m-.257 3.743a6 6 0 0 1 -5.743 4.257h-2a6 6 0 0 1 -6 -6v-5h7"}],["path",{"d":"M20.116 16.124a3 3 0 0 0 -3.118 -4.953"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[4],"o":[19,13.56],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,14.01],[7.75,3.25],[11.5,5],[10,15.5]]}];

export const CoffeeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CoffeeOffIcon.displayName = "CoffeeOffIcon";
