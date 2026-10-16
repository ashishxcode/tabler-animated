"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.59 12.59c-.77 1.418 -2.535 2.41 -4.59 2.41c-2.761 0 -5 -1.79 -5 -4a8 8 0 0 0 13.643 5.67m1.64 -2.357a7.97 7.97 0 0 0 .717 -3.313a3 3 0 0 0 -5.545 -1.59"}],["path",{"d":"M16 8c0 -2 2 -4 4 -4"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[11,13.5],"a":0.06},{"fx":"pop","n":[1],"a":0.24,"dl":0.1,"st":0.07,"os":[[18,6]]}];

export const PepperOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PepperOffIcon.displayName = "PepperOffIcon";
