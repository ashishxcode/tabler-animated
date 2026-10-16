"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 13v-10"}],["path",{"d":"M12 21l-6 -8h12l-6 8"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,17],"a":0.08},{"fx":"pop","n":[0],"o":[12,8],"a":0.22,"dl":0.1}];

export const CircuitGroundDigitalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircuitGroundDigitalIcon.displayName = "CircuitGroundDigitalIcon";
