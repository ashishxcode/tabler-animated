"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 13v-8"}],["path",{"d":"M4 13h16"}],["path",{"d":"M7 16h10"}],["path",{"d":"M10 19h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,13],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,9],[12,16],[12,19]]}];

export const CircuitGroundIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircuitGroundIcon.displayName = "CircuitGroundIcon";
