"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 10a5 5 0 1 1 0 10a5 5 0 0 1 0 -10"}],["path",{"d":"M12 10v-7"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,15],"a":0.08},{"fx":"pop","n":[1],"o":[12,6.5],"a":0.22,"dl":0.1}];

export const GenderNeutroisIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GenderNeutroisIcon.displayName = "GenderNeutroisIcon";
