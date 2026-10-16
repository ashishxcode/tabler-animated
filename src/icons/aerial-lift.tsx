"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 5l16 -2"}],["path",{"d":"M12 4v10"}],["path",{"d":"M6.894 8h10.306c2.45 3 2.45 9 -.2 12h-10.106c-2.544 -3 -2.544 -9 0 -12"}],["path",{"d":"M5 14h14"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2,3],"o":[12,11.5],"a":0.06},{"fx":"pop","n":[1],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,9]]}];

export const AerialLiftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AerialLiftIcon.displayName = "AerialLiftIcon";
