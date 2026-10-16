"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1"}],["path",{"d":"M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"}],["path",{"d":"M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"}],["path",{"d":"M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5"}],["path",{"d":"M16.746 16.726a3 3 0 1 0 .252 -5.555"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3],"o":[10,15.5],"a":0.06},{"fx":"pop","n":[1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[7.5,5],[11.5,5],[18.87,14]]}];

export const CoffeeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CoffeeIcon.displayName = "CoffeeIcon";
