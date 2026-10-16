"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 12a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"}],["path",{"d":"M7 12h11"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.08},{"fx":"pop","n":[1],"o":[12.5,12],"a":0.22,"dl":0.1}];

export const GenderAgenderIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GenderAgenderIcon.displayName = "GenderAgenderIcon";
