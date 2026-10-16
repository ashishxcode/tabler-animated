"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 11a5 5 0 1 1 0 10a5 5 0 0 1 0 -10"}],["path",{"d":"M12 11v-8"}],["path",{"d":"M14.5 4.5l-5 3"}],["path",{"d":"M9.5 4.5l5 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,16],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,7],[12,6],[12,6]]}];

export const GenderGenderqueerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GenderGenderqueerIcon.displayName = "GenderGenderqueerIcon";
