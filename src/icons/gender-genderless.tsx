"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 10a5 5 0 1 1 0 10a5 5 0 0 1 0 -10"}],["path",{"d":"M12 10v-7"}],["path",{"d":"M7 15h10"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,15],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,6.5],[12,15]]}];

export const GenderGenderlessIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GenderGenderlessIcon.displayName = "GenderGenderlessIcon";
