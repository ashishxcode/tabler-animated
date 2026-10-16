"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 17.5a1.5 1.5 0 0 1 1.5 -1.5h11a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1 -1.5 1.5h-11a1.5 1.5 0 0 1 -1.5 -1.5"}],["path",{"d":"M12 16q -2.5 -8 -6 -8q -2.5 0 -3 2c2.953 .31 3.308 3.33 4 6"}],["path",{"d":"M12 16q 2.5 -8 6 -8q 2.5 0 3 2c-2.953 .31 -3.308 3.33 -4 6"}],["path",{"d":"M9 9.5q 2 -3.5 3 -3.5t 3 3.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,13.5],"a":0.06},{"fx":"pop","n":[3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,7.75]]}];

export const JokerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
JokerIcon.displayName = "JokerIcon";
